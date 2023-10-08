import './App.css'



import TableList from "./components/Table/TableList.tsx";
import DiagrammList from "./components/diagramm/DiagrammList.tsx";



function App() {


  return (
     <div className={'flex flex-col px-10 py-10'}>
       <TableList/>
       <DiagrammList/>
     </div>
  )
}

export default App
