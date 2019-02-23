import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DemoValueRequest, DemoValueActionTypes, DemoValueUpdate } from '@actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { DemoValueService } from '@http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class DemoEffects {

  @Effect()
  $demoValuesRequest = this.actions$.pipe(
    ofType<DemoValueRequest>(DemoValueActionTypes.DemoValueRequest),
    exhaustMap(value =>
      this.demoValueService.SendValue(value.payload).pipe(
        map((response: string) => {
          return new DemoValueUpdate(response);
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new DemoValueUpdate(`ERROR: ${error.message}`));
        })
      )),
  );

  constructor(
    private actions$: Actions,
    private demoValueService: DemoValueService,
  ) {}
}
