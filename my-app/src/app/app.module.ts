import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroFormComponent } from '../pages/hero/hero-form.component';
import { ReginForm } from '../pages/regin/regin-form';

import { requestOptionsProvider }   from './default-request-options.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReginForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
    	{
    		path: '',
    		redirectTo: '/heroes',
    		pathMatch: 'full'
    	},
		  {
		    path: 'heroes',
		    component: HeroFormComponent
		  },
		  {
		  	path: 'regin',
		  	component: ReginForm
		  }
		])
  ],
  providers: [requestOptionsProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
