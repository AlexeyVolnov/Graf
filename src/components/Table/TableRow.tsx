import {ChangeEvent, FC} from "react";
import style from "./table.module.scss";
import {ICoordinates, ITable} from "../../types/types.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {ceilChangeX, ceilChangeY, rowDelete} from "../../store/itemsSlice.tsx";


interface ITableRowProps {
  row: ICoordinates,
  table: ITable
}


const TableRow: FC<ITableRowProps> = ({row, table}) => {

  const dispatch = useAppDispatch()
  const rowDeleteHandler = () => {
    dispatch(rowDelete({
      tableId: table.id,
      rowId: row.id
    }))

  }

  const  inputHandlerX = (cord:ChangeEvent<HTMLInputElement>)=>{
    const rowCurrent = {
      value: +cord.target.value,
      tableID: table.id,
      rowID: row.id,
    }
    dispatch(ceilChangeX(rowCurrent))

  }
  const  inputHandlerY = (cord:ChangeEvent<HTMLInputElement>)=>{
    const rowCurrent = {
      value: +cord.target.value,
      tableID: table.id,
      rowID: row.id,
    }
    dispatch(ceilChangeY(rowCurrent))
  }

  return (
     <>
       <td><input className={style.input} onInput={inputHandlerX}   defaultValue={row.x} type="number"/></td>
       <td><input className={style.input} onInput={inputHandlerY}  defaultValue={row.y} type="number"/></td>
       <td>
         {!table.calc && <button onClick={rowDeleteHandler} className={style.delete}>Delete</button>}
       </td>
     </>

  )
}

export default TableRow