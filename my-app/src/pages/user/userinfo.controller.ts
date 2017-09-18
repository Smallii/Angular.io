import { Component, OnInit } from '@angular/core';
//导航
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//导入对象
import { UserInfo } from './userinfo';
//导入服务
import { UserInfoService } from './userinfo.service';

@Component({
  selector: 'userinfo.view',
  providers: [ UserInfoService ],
  templateUrl: './userinfo.view.html'
})
export class UserInfoController implements OnInit{
  	constructor (
  		private userInfoService: UserInfoService,
  		private router: Router
  	) {}
  	ngOnInit() {  }
  	//导航跳转
  	onBack() {
    this.router.navigate(['/heroes',]);
  }
}