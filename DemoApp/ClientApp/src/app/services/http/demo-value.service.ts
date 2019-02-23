import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DemoValueService {

    constructor(private http: HttpClient) {}

    public SendValue(value: string): Observable<any> {
        return this.http.post('demo', { value: value });
    }
}
