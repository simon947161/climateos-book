import "./globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{props.children}</body>
    </html>
  );
}
