import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//导入对象
import { UserInfo } from './userinfo';
    
@Injectable()
export class UserInfoService {
	
  private heroesUrl = 'http://192.168.1.123:8080/findAll';  // URL to web API
  
  private heroesUrladd = 'http://192.168.1.123:8080/save';

  constructor (private http: Http) {}

}