import type { ReactNode } from "react";
import { MathJaxRefresh } from "@/components/MathJaxRefresh";

type MarkdownDocumentProps = {
  content: string;
};

export function MarkdownDocument({ content }: MarkdownDocumentProps) {
  const blocks = stripFrontMatter(content).replace(/\r\n/g, "\n").split(/\n{2,}/);

  return (
    <article className="markdown-document">
      {blocks.map((block, index) => renderBlock(block.trim(), index))}
      <MathJaxRefresh />
    </article>
  );
}

function renderBlock(block: string, index: number) {
  if (!block) {
    return null;
  }

  if (isPublicationArtifact(block)) {
    return null;
  }

  if (block.startsWith("$$") && block.endsWith("$$")) {
    return (
      <div className="math-block" data-mathjax key={index}>
        {block}
      </div>
    );
  }

  if (block.startsWith("```")) {
    return <pre key={index}>{block.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "")}</pre>;
  }

  const lines = block.split("\n").map((line) => line.trimEnd());
  const firstLine = lines[0].trim();
  const image = parseMarkdownImage(firstLine);

  if (lines.length === 1 && image) {
    return (
      <figure className="markdown-figure" key={index}>
        <img alt={image.alt} className="markdown-image" src={resolveMarkdownImageSrc(image.src)} />
        {image.alt ? <figcaption>{image.alt}</figcaption> : null}
      </figure>
    );
  }

  if (firstLine.startsWith("### ")) {
    return <h3 key={index}>{cleanHeadingText(firstLine.replace(/^###\s+/, ""))}</h3>;
  }

  if (firstLine.startsWith("## ")) {
    return <h2 key={index}>{cleanHeadingText(firstLine.replace(/^##\s+/, ""))}</h2>;
  }

  if (firstLine.startsWith("# ")) {
    return <h1 key={index}>{cleanHeadingText(firstLine.replace(/^#\s+/, ""))}</h1>;
  }

  if (lines.every((line) => line.trim().startsWith("- "))) {
    return (
      <ul key={index}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{renderInlineText(line.trim().replace(/^-\s+/, ""))}</li>
        ))}
      </ul>
    );
  }

  if (lines.every((line) => /^\d+\.\s+/.test(line.trim()))) {
    return (
      <ol key={index}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{renderInlineText(line.trim().replace(/^\d+\.\s+/, ""))}</li>
        ))}
      </ol>
    );
  }

  if (lines.every((line) => line.trim().startsWith(">"))) {
    return (
      <blockquote key={index}>
        {lines.map((line, lineIndex) => (
          <p key={lineIndex}>{renderInlineText(line.trim().replace(/^>\s?/, ""))}</p>
        ))}
      </blockquote>
    );
  }

  if (lines.every((line) => line.trim() === "---")) {
    return null;
  }

  return (
    <p key={index}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {renderInlineText(line)}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

function stripFrontMatter(value: string) {
  return value.replace(/^---\n[\s\S]*?\n---\n?/, "");
}

function isPublicationArtifact(value: string) {
  const trimmed = value.trim();

  return (
    /^<!--\s*Page\s+\d+\s*-->$/i.test(trimmed) ||
    /^!page\s*\d*$/i.test(trimmed) ||
    /^!Page\s*\d*$/i.test(trimmed) ||
    /^!\[\]\[image\d+\]$/i.test(trimmed)
  );
}

function cleanHeadingText(value: string) {
  return value.trim().replace(/^\*(.+)\*$/, "$1");
}

function renderInlineText(value: string): ReactNode[] {
  return value.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}


function parseMarkdownImage(value: string) {
  const match = value.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);

  if (!match) {
    return null;
  }

  return {
    alt: match[1].trim(),
    src: match[2].trim(),
  };
}

function resolveMarkdownImageSrc(src: string) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("/")) {
    return src;
  }

  if (src.startsWith("assets/")) {
    return `/assets/torch-and-horizon/en/${src.replace(/^assets\//, "")}`;
  }

  return src;
}
