import "./App.css";

function App() {
  return (
    <>
      <div className="container  mx-auto flex items-center ">
        <a href="#" className="text-4xl uppercase">
          logo
        </a>
        <nav className="ml-10 border-l-4 pl-10">
          <ul className="text-xl uppercase flex items-center space-x-5">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </nav>
        {/* btn for the Sing Loging */}
        <div className="flex-1  items-center flex justify-end space-x-5">
          <button className="text-2xl">Loging</button>
          <button className="text-2xl bg-red-400 py-2 px-5">SingUp</button>
        </div>
      </div>
    </>
  );
}

export default App;
