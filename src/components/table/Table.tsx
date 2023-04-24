import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
type iprops = {
    data:string[],
}
const Table:React.FC<iprops> = ({data}) => {
  return (
    <table>
        <Thead />
        <Tbody data={data} />
    </table>
  )
}

export default Table