import React, { useEffect, useState } from 'react';
import  axios  from "axios";
import './App.css';
import Table from './components/table/Table';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    setLoading(true);
    axios.get(url)
      .then((res:any) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="aie arm">
      <div className='fx gg add bul cst'>
      {
        loading ? <Loading />: <Table data={data} />
      }
      </div>
    </div>
  );
}

export default App;
