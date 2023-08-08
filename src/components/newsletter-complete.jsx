import { useState } from "react";
import "../App.css";

function Complete() {
  const [close, setClose] = useState(false);

  return (
    <>
      <article className="mx-auto w-screen h-screen z-50 ">
        <div
          className={` z-10 bg-slate-100 rounded-lg px-6 py-8 absolute  top-44 right-0 left-0  mx-auto w-80 flex flex-col gap-2 space-y-3 ${
            close ? "hidden" : ""
          } `}
        >
          <img
            className="w-12"
            src="../../assets/images/icon-success.svg"
            alt=""
          />
          <h1 className="text-4xl">Thanks for subscribing!</h1>
          <p className="sub-text text-sm">
            a confirmaton e-mail has been sent to{" "}
            <p className="font-bold">***@gmail.com</p>.Please open it and click
            the button inside to confirm your subscription
          </p>

          <button
            className="btn"
            type="button"
            onClick={() => setClose(true)}
          >
            DISMISS
          </button>
        </div>

        <div
          className={`${
            close ? "hidden" : ""
          } z-0 w-screen h-screen opacity-60 bg-zinc-950 md:absolute top-0 left-0 bottom-0 `}
        ></div>
      </article>
    </>
  );
}
export default Complete;
