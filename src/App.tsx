import './App.css'

import GrafList from "./components/GrafList.tsx";

import TableList from "./components/Table/TableList.tsx";



function App() {


  return (
     <div className={'flex flex-col px-10 py-10'}>
       <TableList/>
       <GrafList/>
     </div>
  )
}

export default App
