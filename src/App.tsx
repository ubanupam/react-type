import { useEffect, useState } from 'react';
import  axios  from "axios";
import './App.css';
import Table from './components/table/Table';
import Loading from './components/Loading';
import Pagination from './components/pagination/Pagination';

function App() {
  const [data, setData] = useState<string[]>([])
  const [pageNo, setPageNo] = useState<number>(1)
  const [itemsPerPages, setitemsPerPages] = useState<number>(10)
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
        loading ? <Loading />: 
        <>
        <Table data={data} pageNo={pageNo} itemsPerPages={itemsPerPages} />
        <Pagination 
          data={data}
          pageNo={pageNo}
          setPageNo={setPageNo}
          itemsPerPages={itemsPerPages}
          setitemsPerPages={setitemsPerPages}
        />
        </>
        }
      </div>
    </div>
  );
}

export default App;
