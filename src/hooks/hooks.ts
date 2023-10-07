import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.tsx";


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch:()=>AppDispatch = useDispatch