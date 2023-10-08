import {ICoordinates, IInput, ITable, TypeInitialState} from "../types/types.ts";
import {PayloadAction} from "@reduxjs/toolkit";

export function ceilChange(state:TypeInitialState,action:PayloadAction<IInput>){
  const tableCurrent: ITable[] = state.tables.filter((table:ITable) => table.id === action.payload.tableID)
  const rowCurrent:ICoordinates[] = tableCurrent[0].rows.filter(row => row.id === action.payload.rowID);
  return rowCurrent
}