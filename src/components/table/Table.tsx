import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
type iprops = {
    data:string[],
}
const Table:React.FC<iprops> = ({data}) => {
  return (
    <table className='table-auto border-collaple border border-slate-300'>
        <Thead />
        <Tbody data={data} />
    </table>
  )
}

export default Table