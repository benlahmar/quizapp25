import { createReducer, on } from "@ngrx/store";
import { allowback, allowreview, duration } from "./config.actions";
import { initialConfigState } from "./configstate";

export const configreducer=createReducer(

   /* {
        allowreview: false,
        allowback: false,
        duration: 0
    }*/
         initialConfigState,

     on(allowreview, (state, { value }) => ({ ...state, allowreview: value })),
     on(allowback, (state, { value }) => ({ ...state, allowback: value })),
     on(duration, (state, { value }) => ({ ...state, duration: value }))

);