

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h3>fnskdjfm</h3>
        {children}
        <h2>Product Details Layout</h2>
      </body>
    </html>
  );

}
