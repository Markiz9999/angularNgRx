export enum DemoValueActionTypes {
    DemoValueUpdate = '[DemoValue] ValueUpdate',
    DemoValueRequest = '[DemoValue] ValueRequest',
    DemoValueReset = '[DemoValue] DemoValueReset',
}

export class DemoValueUpdate {
    readonly type = DemoValueActionTypes.DemoValueUpdate;
    constructor(public payload: string) {}
}

export class DemoValueRequest {
    readonly type = DemoValueActionTypes.DemoValueRequest;
    constructor(public payload: string) {}
}

export class DemoValueReset {
    readonly type = DemoValueActionTypes.DemoValueReset;
}

export type DemoValueUnion = DemoValueUpdate
    | DemoValueRequest
    | DemoValueReset;
