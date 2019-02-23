import {
  ActionReducerMap,
} from '@ngrx/store';

import * as DemoReducer from './demo.reducer';

export interface IAllStates {
  demo: DemoReducer.IDemoValueState;
}

export const AllReducers: ActionReducerMap<IAllStates> = {
  demo: DemoReducer.demoValueReducer,
};
