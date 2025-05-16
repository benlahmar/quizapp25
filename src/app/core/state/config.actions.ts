import { createAction, props } from "@ngrx/store";

export const allowreview =  createAction('[config] Allowreview',props<{ value: boolean }>());


export const allowback =  createAction('[config] Allowback',props<{ value: boolean }>());

export const duration =  createAction('[config] Duration',props<{ value: number }>());
