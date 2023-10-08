import {FC} from "react";
import {ICoordinates, ITable} from "../../types/types.ts";
import style from '../../style/table.module.scss'
import TableRow from "./TableRow.tsx";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {addRow, calculate} from "../../store/itemsSlice.tsx";
import {idCounter} from "../../utils/idCreator.ts";

interface ITableProps {
  table: ITable
}


const Table: FC<ITableProps> = ({table}) => {

  const dispatch = useAppDispatch()

  const addRowHandler = () => {



    const newRow: ICoordinates = {
      id: idCounter(),
      x: 0,
      y: 0
    }

    dispatch(addRow({
      tableId: table.id,
      row: newRow
    }))
  }

  const calculateTableHandler = ()=>{
    dispatch(calculate())
  }

  return (
     <div className={style.tableWrapper}>
       <p className={'text-center bg-neutral-400 py-1.5'}>{table.id} таблица</p>
       <table className={style.table}>
         <thead>
         <tr>
           <th>X</th>
           <th>Y</th>
         </tr>
         </thead>
         <tbody>
           {table.rows.map(row =><tr key={row.id}><TableRow  table={table} row={row}/></tr>)}
         </tbody>
       </table>
       {!table.calc && <button onClick={addRowHandler} className={style.add}>add</button>}
       {table.calc && <button onClick={calculateTableHandler} className={style.add}>Calculate</button>}
     </div>

  )
}

export default Table