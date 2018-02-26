import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any> {
    return this.http.get("https://www.jsonblob.com/api/jsonblob/86f3eee5-1b10-11e8-8015-3967ad8ba251")
      .map(data => data.json());
  }

}
