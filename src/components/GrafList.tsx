import {FC} from "react";
import Diagramm from "./diagramm/Diagramm.tsx";


interface IGrafListProps {

}


const GrafList: FC<IGrafListProps> = ({}) => {
  return (
     <div className={'grid grid-cols-3'}>
       <Diagramm/>
     </div>
  )
}

export default GrafList