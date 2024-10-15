import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <p>Layout está sempre aqui!!!</p>
        {children}
      </body>
    </html>
  );
}
