export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className="flex flex-1">
          {children}
        </main>
  );
}
