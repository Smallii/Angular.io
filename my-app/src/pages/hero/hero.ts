export class Hero {

  constructor(
  	//id
    public id: number,
    //姓名
    public name: string,
    //昵称
    public nick: string,
    //当前页
    public page: number,
    //条数
    public size: number,
    //总页数
    public totalPages: number,
    //返回当前页
    public number: number,
    //总条数
    public totalElements: number
  ) {  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/