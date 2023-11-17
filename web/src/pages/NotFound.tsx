import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="h-[90vh] flex justify-center text-center items-center flex-col">
      <h1 className="font-bold text-3xl">Not Found</h1>
      <p className="w-1/2">
        The page you are looking for is not avilable. Either you entered in a
        invalid link or this page may be comming soon.
      </p>
      <button
        onClick={() =>
          navigate("/", {
            replace: true,
          })
        }
        className="px-24 bg-blue-800 text-white p-1 my-2 rounded hover:bg-blue-900 transition-colors"
      >
        Homepage
      </button>
    </section>
  );
}

export default NotFound;
