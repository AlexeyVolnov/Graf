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
  const xCoordinate = Array.from(diagramData.rows.map(row => row.x))
  const yCoordinates = Array.from(diagramData.rows.map(row => row.y))
  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `график ${diagramData.id} таблицы`,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = xCoordinate

  const data = {
    labels,
    datasets: [
      {
        label: 'x',
        data: xCoordinate,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
     <div className='bg-neutral-200 w-full'>
       <Line options={options} data={data}/>
     </div>
  )
}
export default Diagramm