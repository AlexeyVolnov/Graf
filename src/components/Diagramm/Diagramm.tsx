import { LineChart } from '@mui/x-charts/LineChart';
import {FC} from "react";
import {ITable} from "../../types/types.ts";





interface IDiagrammProps {
  diagramData: ITable
}

const Diagramm: FC<IDiagrammProps> = ({diagramData}) => {
  const xCoordinate = Array.from(diagramData.rows.map(row => row.x))
  const yCoordinates = Array.from(diagramData.rows.map(row => row.y))

  return (
     <div className='bg-neutral-200 w-full'>
       <LineChart
          xAxis={[{ data: xCoordinate }]}
          series={[
            {
              data: yCoordinates,
            },
          ]}
          width={500}
          height={300}
       />
     </div>
  )
}
export default Diagramm