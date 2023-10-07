import './App.css'
import TableList from "./components/tables/TableList.tsx";
import GrafList from "./components/GrafList.tsx";



function App() {


  return (
     <div className={'flex flex-col px-10 py-10'}>
       <TableList/>
       <GrafList/>
     </div>
  )
}

export default App
