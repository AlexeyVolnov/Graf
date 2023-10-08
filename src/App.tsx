import './App.css'



import TableList from "./components/Table/TableList.tsx";
import DiagrammList from "./components/diagramm/DiagrammList.tsx";



function App() {


  return (
     <div className={'grid grid-cols-3 bg-neutral-50 items-center justify-center gap-10 px-5 py-5 grid-rows-2'}>
       <TableList/>
       <DiagrammList/>
     </div>
  )
}

export default App
