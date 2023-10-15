import { useEffect, useState } from "react";
import { getTagsRequest } from "../api/tags";

function Tags() {

    const [tags,setTags]= useState([])

    async function getTags(){
        try {
            const data=await getTagsRequest();
            setTags(data.data);     
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getTags();
    },[])





 return (
    <div>
    
        
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                   Title
                </th>
                <th scope="col" className="px-6 py-3">
                   Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {
                tags.map((tag)=>{
                    return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {tag._id}
                        </th>
                        <td className="px-6 py-4">
                            {tag.title}
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
</div>

        
    </div>
  )
}
export default Tags