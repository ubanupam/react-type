import React from 'react'
type iprops = {
    data:string[];
    pageNo:number;
    itemsPerPages: number;
}
const Trow:React.FC<iprops> = ({ data, pageNo, itemsPerPages }) => {
  return (
    <>
        {
            data?.slice(pageNo * itemsPerPages - itemsPerPages, pageNo * itemsPerPages).map((item:any, itemKey:number)=>{
                return (
                    <tr key={itemKey}  className='even:bg-purple-100 odd:bg-blue-100 h-24 hover:bg-gray-100'>
                        <td className='font-bold pl-2'>{item.id}.</td>
                        <td className='pl-5 pr-5'>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default Trow