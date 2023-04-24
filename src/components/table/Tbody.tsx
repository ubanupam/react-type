import React from 'react'
type iprops = {
    data:string[]
}
const Tbody:React.FC<iprops> = ({data}) => {
  return (
    <tbody>
        {
            data?.map((item:any, itemKey:number)=>{
                return (
                    <tr key={itemKey}  className='border-solid border h-24'>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                )
            })
        }
    </tbody>
  )
}

export default Tbody