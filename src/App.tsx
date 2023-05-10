import React, { Suspense, useEffect, useState } from 'react';
import  axios  from "axios";
import './App.css';
import Loading from './components/Loading';
// import Table from './components/table/Table';

const Table = React.lazy(()=>import("./components/table/Table"))

function App() {
  const [data, setData] = useState<string[]>([])
  // const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // setLoading(true);
    axios.get(url)
      .then((res:any) => {
        setData(res.data);
        // setLoading(false);
      });
  }, []);
  return (
    <div className="aie arm">
      <div className='fx gg add bul cst'>
        <Suspense fallback={<Loading/>}>
            <Table data={data} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
