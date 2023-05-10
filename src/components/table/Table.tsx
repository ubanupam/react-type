import React from 'react'
import Thead from './Thead'
import Trow from './Trow'
type Iprops = {
    data:string[];
    pageNo:number;
    itemsPerPages:number;
}
const Table:React.FC<Iprops> = ({data, pageNo, itemsPerPages}) => {
  return (
    <table className='table-auto border-collaple border border-slate-300'>
        <Thead />
        <tbody>
          <Trow data={data} pageNo={pageNo} itemsPerPages={itemsPerPages} />
        </tbody>
    </table>
  )
}

export default Table