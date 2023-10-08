
export interface IRowDelete{
  tableId:number,
  rowId:number
}

export interface ICoordinates {
  id:number,
  x: number,
  y: number
}

export interface IInput{
  value:number,
  tableID:number,
  rowID:number
}

export interface ITable {
  id:number
  rowsCount:number,
  calc?:boolean,
  rows: ICoordinates[]
}

export type TypeInitialState = {

  tables:ITable[]
}


export interface newRow{
  tableId:number,
  row:ICoordinates
}