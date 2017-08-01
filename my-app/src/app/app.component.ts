import { Component, OnInit } from '@angular/core';

import { Captions } from './captions';
import { AppService } from './app.service';
import { routerTransition } from './router.animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
  providers: [ AppService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	getState(outlet) {
    return outlet.activatedRouteData.state;
  }
	
	title = 'Angular';
	
	errorMessage: string;
  captions: Captions[];
  mode = 'Observable';
  
  constructor (private appService: AppService) {}

  ngOnInit() { this.getCaptions(); }
  
  getCaptions() {
    this.appService.getCaptions().subscribe(
    	captions => this.captions = captions,
    	error => this.errorMessage = <any>error);
  }
  
}