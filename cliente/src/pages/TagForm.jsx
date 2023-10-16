import { Link } from "react-router-dom";

function TagForm() {
  return (
    <>
      <div className="h-screen w-full relative bg-gradient-to-t from-amber-50 via-yellow-100 border-t-yellow-300 overflow-x-auto p-5">
        
        <Link className="flex justify-end" to={"/tags"}>
          <button className="bg-red-400 p-2 rounded-lg text-red-50 mx-2">
            Cancelar
          </button>
        </Link>
      <div className="h-full flex flex-col items-center">
      <h1 className="text-4xl pb-14 font-extrabold text-amber-900">New Tag</h1>
        <form className="bg-amber-900  shadow-md shadow-amber-200 border-amber-200 border-b-4 pt-10 px-2 pb-2 rounded-xl">
        <div className="bg-white rounded-md p-5">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-neutral-700"
            >
              Name Tag
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-200 focus:border-amber-500 block w-full p-2.5"
              placeholder="desserts"
              required
            />
          </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default TagForm;
