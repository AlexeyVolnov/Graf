import {ChangeEvent, FC} from "react";
import style from "./table.module.scss";


interface ITableInputProps {
  cord: number,
  inputHandler: (event:ChangeEvent<HTMLInputElement>) => void
}


const TableInput: FC<ITableInputProps> = ({cord,inputHandler}) => {
  return (
     <td><input className={style.input} onChange={(cord)=>inputHandler(cord)} defaultValue={cord} type="number"/></td>
  )
}

export default TableInput