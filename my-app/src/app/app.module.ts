import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroFormComponent } from '../pages/hero/hero-form.component';
import { ReginForm } from '../pages/regin/regin-form';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReginForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    	{
    		path: '',
    		redirectTo: '/regin',
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
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
