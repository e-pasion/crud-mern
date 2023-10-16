import { useEffect, useState } from "react";
import { getTagsRequest } from "../api/tags";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
// import { IoMenu } from 'react-icons/io5';
import Navbar from "./Navbar";

function Tags() {
  const [tags, setTags] = useState([]);

  async function getTags() {
    try {
      const data = await getTagsRequest();
      setTags(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTags();
  }, []);
  return (
    <>
    <Navbar/>
    <div className="">
    <div className="h-screen w-full p-5 relative bg-gradient-to-b from-amber-50 via-yellow-100 border-t-yellow-300 overflow-x-auto">
    
    {/* <button className="text-3xl p-2 bg-amber-200 rounded-xl text-amber-950"><IoMenu/></button> */}

    <div className="flex pt-10 justify-center">
      <div className=" w-8/12  flex flex-col items-center ">
        
      <h1 className="text-4xl pb-14 font-extrabold text-amber-900">{"Tags"}</h1>
        <table className="w-full text-sm text-left text-amber-200 ">
          <thead className="text-xs text-amber-200 uppercase bg-amber-950">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 flex justify-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag) => {
              return (
                <tr
                  key={tag._id}
                  className="bg-amber-200 border-b border-amber-400"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowra text-yellow-700"
                  >
                    {tag._id}
                  </th>
                  <td className="px-6 py-4 text-yellow-700">{tag.title}</td>
                  <td className="px-6 py-4 text-yellow-700 flex justify-center">
                    <button className="bg-orange-500 p-2 rounded-lg text-orange-200 mx-2">Editar</button>
                    <button className="bg-red-400 p-2 rounded-lg text-red-100 mx-2">Borrar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Link to={"/newTag"} className="w-full flex justify-end p-10">
          <button className="bg-red-400 rounded-full p-5"><AiOutlinePlus/></button>
        </Link>
      </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default Tags;
