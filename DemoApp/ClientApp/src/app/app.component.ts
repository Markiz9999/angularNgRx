import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllStates } from '@reducers';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { DemoValueRequest, DemoValueReset } from '@actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  serverValue$: Observable<string>;
  hasValue$: Observable<boolean>;

  title = 'DemoApp';
  value = '';

  constructor(private store: Store<IAllStates>) {
    this.serverValue$ = this.store.select(state => state.demo.value).pipe(
      map(value => `This is the value received from the server: ${value}`),
    );
    this.hasValue$ = this.store.select(state => state.demo.value).pipe(
      map(value => value != null),
    );
  }

  sendValue() {
    if (this.value.trim() !== '') {
      this.store.dispatch(new DemoValueRequest(this.value));
    }
    return false;
  }

  removeValue() {
    this.store.dispatch(new DemoValueReset());
  }
}
