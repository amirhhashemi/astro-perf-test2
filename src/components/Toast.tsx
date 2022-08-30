import toast, { Toaster } from "react-hot-toast";

export default () => {
  return (
    <div>
      <Toaster /> <button onClick={() => toast("Hello")}>Toast</button>
    </div>
  );
};
