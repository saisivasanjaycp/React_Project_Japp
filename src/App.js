// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComp from './Components/AboutComp';
import HomeComp from './Components/HomeComp';
import ProductComp from './Components/ProductComp';
import NavComp from './Components/NavComp';
import ContactComp from './Components/ContactComp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavComp />
        <HomeComp />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavComp />
        <AboutComp />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <NavComp />
        <ProductComp />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavComp />
        <ContactComp />
      </>
    ),
  },
]);


function App() {
  // return (
    // <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <AboutComp/> */}
      {/* <HomeComp/> */}
      {/* <ProductComp/> */}
      {/* <NavComp/> */}
      {/* <AboutComp/> */}
      {/* <ContactComp/> */}

    // </div>
    return <RouterProvider router={router} />;
  // );
}

export default App;
