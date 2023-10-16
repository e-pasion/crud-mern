import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="h-screen w-full relative bg-gradient-to-t from-amber-50 via-yellow-100 border-t-yellow-300 overflow-x-auto p-5">
        <div className="h-full flex flex-col items-center">
          <h1 className="text-4xl pb-14 font-extrabold text-amber-900">Home</h1>
          <form className="bg-amber-900  shadow-md shadow-amber-200 border-amber-200 border-b-4 pt-10 px-2 pb-2 rounded-xl">
            <div className="bg-white rounded-md p-5">
              <div className="text-center flex flex-col">
                <Link to={"/"}>
                  <button
                    type="submit"
                    className="mt-1 text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Recipes
                  </button>
                </Link>
                <Link to={"/tags"}>
                  <button
                    type="submit"
                    className="mt-5 text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Tags
                  </button>
                </Link>
                <Link to={"/"}>
                <button
                  type="submit"
                  className="mt-5 text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  ingredients
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
