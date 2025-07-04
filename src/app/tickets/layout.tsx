export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main    
        className="bg-gray-200 shadow-2xl  py-5 px-5">
          {children}
        </main>
  );
}
