import {FC} from "react";


interface ITableStringProps {

}


const TableString: FC<ITableStringProps> = ({}) => {
  return (
     <div className={'flex gap-2'}>
       <input type="number"/>
       <input type="number"/>
       <button className={'px-5 py-2'}>Delete</button>
     </div>
  )
}

export default TableString