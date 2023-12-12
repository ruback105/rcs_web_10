// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <div className="relative">
      <header className="fixed top-0 left-0 h-12 p-4 shadow-md w-screen flex items-center bg-white">
        <h1 className="text-3xl font-bold cursor-pointer">
          <a href="/">Random Beer</a>
        </h1>
        <nav className="ml-10">
          <ul className="flex items-center space-x-2">
            <li>
              <a href="/random-beer">Random Beer</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="p-8 mt-12">{children}</div>
    </div>
  );
}

export default DefaultLayout;
