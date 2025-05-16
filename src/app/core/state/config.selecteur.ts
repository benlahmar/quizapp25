import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConfigState } from "./configstate";

export const selectConfigState = createFeatureSelector<ConfigState>('config');

export const selectallowbackValue = createSelector(
  selectConfigState, // Sélectionne la slice de l'état 'config'
  (state: ConfigState) => state.config.allowBack // Retourne la valeur de 'allowback' dans cette slice
);

export const selectAllowReview = (state: ConfigState) => state.config.allowReview;


export const selectback=selectallowbackValue;