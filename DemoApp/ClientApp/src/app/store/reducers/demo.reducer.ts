import { DemoValueUnion, DemoValueActionTypes } from '@actions';

export interface IDemoValueState {
    value: string;
}

const initialState: IDemoValueState = {
    value: null,
};

export function demoValueReducer(state = initialState, action: DemoValueUnion): IDemoValueState {
    switch (action.type) {
        case DemoValueActionTypes.DemoValueUpdate:
            return { ...state, value: action.payload };
        case DemoValueActionTypes.DemoValueReset:
            return initialState;
        default:
            return state;
    }
}
