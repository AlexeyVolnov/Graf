import {ChangeEvent, FC} from "react";
import style from "./table.module.scss";
import {ICoordinates, ITable} from "../../types/types.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {ceilChange, rowDelete} from "../../store/itemsSlice.tsx";
import TableInput from "./TableInput.tsx";
import {idCounter} from "../idCreator.ts";


interface ITableRowProps {
  row: ICoordinates,
  table: ITable
}


const TableRow: FC<ITableRowProps> = ({row, table}) => {

  const dispatch = useAppDispatch()
  const coordinates = [row.x, row.y]
  const rowDeleteHandler = () => {
    dispatch(rowDelete({
      tableId: table.id,
      rowId: row.id
    }))

  }
  const inputHandler = (cord:ChangeEvent<HTMLInputElement>) => {
       dispatch(ceilChange({
         value:+cord.target.value,
         tableID:table.id,
         rowID:+row.id
       }))
  }


  return (
     <>
       {coordinates.map(cord => <TableInput inputHandler={inputHandler} key={idCounter()} cord={cord}/>)}
       <td>
         {!table.calc && <button onClick={rowDeleteHandler} className={style.delete}>Delete</button>}
       </td>
     </>

  )
}

export default TableRow