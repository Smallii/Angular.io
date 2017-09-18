import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroFormComponent } from '../pages/hero/hero-form.component';
import { ReginForm } from '../pages/regin/regin-form';
//导入用户模块
import { UserInfoController } from '../pages/user/userinfo.controller';

import { requestOptionsProvider }   from './default-request-options.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReginForm,
    UserInfoController
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    	{
    		path: '',
    		redirectTo: '/heroes',
    		pathMatch: 'full'
    	},
		  {
		    path: 'heroes',
		    component: HeroFormComponent,
		    data: { state: 'heroes'}
		  },
		  {
		  	path: 'regin',
		  	component: ReginForm,
		  	data: { state: 'regin'}
		  },
		  {
		  	path: 'user',
		  	component: UserInfoController,
		  	data: { state: 'user'}
		  }
		])
  ],
  providers: [requestOptionsProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
