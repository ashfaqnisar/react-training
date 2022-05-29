import {useState,useEffect} from 'react';
import axios from "axios"
import useSWR from 'swr'

let renderCounter = 0;

// const UseEffectSample = () => {

//   const [count, setCount] = useState(0);

//   const updateCount = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div style={{display: "flex", flexDirection: "column"}}>
//       <div>
//       Rendered Count: {renderCounter++}  
//       </div>
//       <div>
//         Sample Count : {count}
//       </div>
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>
//       {updateCount()}
//     </div>
//   );
// };

// - UseEffect Hook 
//   - Similar to state
//   - Runs the function whenever the deps change. 

const UseEffectSample = () => {
  const [dataSource, setDataSource] = useState(true);

  useEffect(() => {
    console.log("useEffect called becuase of the dataSource change");
  }, [])

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div>
      Rendered Count: {renderCounter++}  
      </div>
      <div>
        Sample Count : {dataSource?.length}
        {/* Data : {<pre>{dataSourc}</pre> ?? "Empty Data"} */}
      </div>
      <div>
        <button onClick={() => setDataSource(!dataSource)}>Increment</button>
        {/* <button onClick={() => count = (count - 1)}>Decrement</button> */}
      </div>
    </div>
  );
};

// const UseEffectSample = () => {
//   // const [dataSource, setDataSource] = useState(null);

//   const fetcher = () => { 
//     return axios.get('https://jsonplaceholder.typicode.com/todos')
//   }

//   const { data, error } = useSWR('/api/user', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   console.log(data?.data)

//   return <div>Count: {data?.data?.length}</div>


//   // if(!dataSource){
//   //   return <div>Loading...</div>
//   // }




//   // console.log(dataSource ?? "default")

//   // return (
//   //   <div style={{display: "flex", flexDirection: "column"}}>
//   //     <div>
//   //     Rendered Count: {renderCounter++}  
//   //     </div>
//   //     <div>
//   //       Sample Count : {dataSource?.length}
//   //       {/* Data : {<pre>{dataSourc}</pre> ?? "Empty Data"} */}
//   //     </div>
//   //     {/* <div>
//   //       <button onClick={() => count = (count + 1)}>Increment</button>
//   //       <button onClick={() => count = (count - 1)}>Decrement</button>
//   //     </div> */}
//   //   </div>
//   // );
// };

export default UseEffectSample;
