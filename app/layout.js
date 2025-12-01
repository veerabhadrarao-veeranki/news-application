import './globals.css';
export const metadata = { title: 'Newsify - Clean Minimal' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-white border-b">
          <div className="w-[95%] mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Newsify</h1>
            <nav className="hidden sm:flex gap-4 text-sm text-gray-700">
              <a href="/">Home</a>
              {/* <a href="/search">Search</a> */}
            </nav>
          </div>
        </header>
        <main className="w-[95%] mx-auto px-4 py-6">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6">Powered by NewsAPI.org</footer>
      </body>
    </html>
  );
}
