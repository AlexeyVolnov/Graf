import {FC} from "react";
import Table from "./Table.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";


interface ITableListProps {

}


const TableList: FC<ITableListProps> = ({}) => {
  const tables = useAppSelector(state=>state.itemsSlice.tables)
  return (
     <div className={'flex gap-11'}>
       {tables.map(table=><Table key={table.id} table={table}/>)}
     </div>
  )
}

export default TableList