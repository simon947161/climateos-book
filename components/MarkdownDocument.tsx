type MarkdownDocumentProps = {
  content: string;
};

export function MarkdownDocument({ content }: MarkdownDocumentProps) {
  const blocks = content.replace(/\r\n/g, "\n").split(/\n{2,}/);

  return (
    <article className="markdown-document">
      {blocks.map((block, index) => renderBlock(block.trim(), index))}
    </article>
  );
}

function renderBlock(block: string, index: number) {
  if (!block) {
    return null;
  }

  if (block.startsWith("```")) {
    return <pre key={index}>{block.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "")}</pre>;
  }

  const lines = block.split("\n").map((line) => line.trimEnd());
  const firstLine = lines[0].trim();

  if (firstLine.startsWith("### ")) {
    return <h3 key={index}>{firstLine.replace(/^###\s+/, "")}</h3>;
  }

  if (firstLine.startsWith("## ")) {
    return <h2 key={index}>{firstLine.replace(/^##\s+/, "")}</h2>;
  }

  if (firstLine.startsWith("# ")) {
    return <h1 key={index}>{firstLine.replace(/^#\s+/, "")}</h1>;
  }

  if (lines.every((line) => line.trim().startsWith("- "))) {
    return (
      <ul key={index}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{line.trim().replace(/^-\s+/, "")}</li>
        ))}
      </ul>
    );
  }

  if (lines.every((line) => /^\d+\.\s+/.test(line.trim()))) {
    return (
      <ol key={index}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{line.trim().replace(/^\d+\.\s+/, "")}</li>
        ))}
      </ol>
    );
  }

  if (lines.every((line) => line.trim().startsWith(">"))) {
    return (
      <blockquote key={index}>
        {lines.map((line, lineIndex) => (
          <p key={lineIndex}>{line.trim().replace(/^>\s?/, "")}</p>
        ))}
      </blockquote>
    );
  }

  if (lines.every((line) => line.trim() === "---")) {
    return <hr key={index} />;
  }

  return (
    <p key={index}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {line}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}
