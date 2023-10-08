import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICoordinates, IInput, IRowDelete, ITable, newRow, TypeInitialState} from "../types/types.ts";
import {idCounter} from "../components/idCreator.ts";


let initialState: TypeInitialState = {
  tables: [{
    id: 1,
    rowsCount: 1,
    rows: [
      {
        id: 1,
        x: 0,
        y: 0
      }
    ]
  },
    {
      id: 2,
      rowsCount: 1,
      rows: [
        {
          id: 2,
          x: 0,
          y: 0
        }
      ]
    },
    {
      id: 3,
      rowsCount: 1,
      calc: true,
      rows: [
        {
          id: 3,
          x: 0,
          y: 0
        }
      ]
    }]


}



const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addRow(state, action: PayloadAction<newRow>) {
      state.tables.map(table => {
        if (table.id === action.payload.tableId) {
          table.rows.push(action.payload.row)
        }
      })
    },
    rowDelete(state, action: PayloadAction<IRowDelete>) {
      state.tables.map(table => {
        if (table.id === action.payload.tableId) {
          if (table.rows.length > 1) {
            table.rows = table.rows.filter((item) => item.id !== action.payload.rowId)
          }
        }
      })
    },
    calculate(state) {
      state.tables[2].rows = []
      const table1: ICoordinates[] = state.tables[0].rows;
      const table2: ICoordinates[] = state.tables[1].rows;
      const minTableLength = Math.min(table1.length, table2.length)
      let table3 = state.tables[2].rows;
      for (let i = 0; i < minTableLength; i++) {
        let row:ICoordinates = {
          id:idCounter(),
          x:0,
          y:0
        }
        row.x = (table1[i].x + table2[i].x) / 2
        row.y = (table1[i].y + table2[i].y) / 2
        table3.push(row)
      }
    },
    ceilChange(state,action:PayloadAction<IInput>){
     const tableCurrent:ITable[] = state.tables.filter((table)=>table.id === action.payload.tableID)
     tableCurrent[0].rows.filter(row=>row.id === action.payload.rowID)
    }
  }
})

export const {addRow, rowDelete, calculate,ceilChange} = itemsSlice.actions
export default itemsSlice.reducer