export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-8">
        {children}
      </div>
    </div>
  );
}
