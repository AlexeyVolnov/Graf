import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {FC} from "react";
import {ITable} from "../../types/types.ts";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);


interface IDiagrammProps {
  diagramData: ITable
}

const Diagramm: FC<IDiagrammProps> = ({diagramData}) => {
  const xCoordinate = diagramData.rows.map(row => row.x)
  const yCoordinates = diagramData.rows.map(row => row.y)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `график ${diagramData.id} таблицы`,
      },
    },
  };

  const labels = ['x', 'y']

  const data = {
    labels,
    datasets: [
      {
        label: 'x',
        data: xCoordinate,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'y',
        data: yCoordinates,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
     <div className={'max-w-[600px] bg-neutral-200 w-full h-[600px]'}>
       <Line options={options} data={data}/>;
     </div>
  )
}
export default Diagramm