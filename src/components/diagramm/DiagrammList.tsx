import {FC} from "react";
import {useAppSelector} from "../../hooks/hooks.ts";
import Diagramm from "./Diagramm.tsx";


interface IDiagrammListProps {

}


const DiagrammList: FC<IDiagrammListProps> = ({}) => {
  const diagrams = useAppSelector(state => state.itemsSlice.tables)
  return (
     <>
       {diagrams.map(diagram=><Diagramm key={diagram.id} diagramData={diagram}/>)}
     </>


  )
}

export default DiagrammList