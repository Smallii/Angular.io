import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
    
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Captions } from './captions';
    
@Injectable()
export class AppService {
	
  private heroesUrl = 'http://192.168.1.18:8080/findAll_caption';  // URL to web API

  constructor (private http: Http) {}

  getCaptions(): Observable<Captions[]> {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.heroesUrl, options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

	private extractData(res: Response) {
	    let body = res.json();
	    console.log('图片列表:' + body);
	    return body || { };
 }	

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}