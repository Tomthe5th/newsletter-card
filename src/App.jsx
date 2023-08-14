import { useState } from "react";
import "./App.css";
import Complete from "./components/newsletter-complete.jsx";

function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      {click ? (
        <div className="absolute top-0 left-0">
          <Complete />
        </div>
      ) : null}

      <article className="mx-auto  rounded-none flex flex-row absolute top-0 left-0  flex-wrap-reverse sm:rounded-3xl p-0 sm: max-w-4xl  gap-8 bg-slate-100  sm:py-4  sub-text -z-10; md:relative md:items-center md:justify-center md:flex-nowrap md:px-4">
        <div className="max-w-1/2 flex flex-col gap-4 leading-loose py-12 px-4 sm:px-12 ">
          <h1>Stay Updated!</h1>
          <p className="text-left">
            join 60,000+ product managers recieving monthly updates on:{" "}
          </p>
          <ul className="list mx-auto space-y-2 ">
            <li>product discovery</li>
            <li>ensure updates are a success</li>
            <li>and much more!</li>
          </ul>

          <form action="" className="flex flex-col gap-4">
            <p className="text-sm text-left ">newsletter</p>
            <input
              type="text"
              name="inpt"
              className="shadow-md rounded-lg border 
          outline-indigo-950 p-2 "
              placeholder="email@company.com"
            />
            <button
              className="btn"
              type="button"
              onClick={() => setClick(!click).then(setClick(false)) }
            >
              Subscribe to monthly newsletter!
            </button>
          </form>
        </div>

        <div className="min-w-1/2 mx-auto w-fullflex justify-center items-center md:w-fit ">
          {/* // * desktop */}
          <img
            className="w-full hidden  md:flex"
            src="../assets/images/illustration-sign-up-desktop.svg "
            alt=""
          />
          {/* //* mobile */}
          <img
            className="w-full md:hidden  "
            src="../assets/images/illustration-sign-up-mobile.svg "
            alt=""
          />
        </div>
      </article>
    </>
  );
}

export default App;
