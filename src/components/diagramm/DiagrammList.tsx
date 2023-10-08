import {FC} from "react";
import {useAppSelector} from "../../hooks/hooks.ts";
import Diagramm from "./Diagramm.tsx";


interface IDiagrammListProps {

}


const DiagrammList: FC<IDiagrammListProps> = ({}) => {
  const diagrams = useAppSelector(state => state.itemsSlice.tables)
  return (
     <div className={'flex gap-4 max-w-full mt-10'}>
       {diagrams.map(diagram=><Diagramm key={diagram.id} diagramData={diagram}/>)}
     </div>
  )
}

export default DiagrammList