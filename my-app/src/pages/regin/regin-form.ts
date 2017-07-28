import { Component, OnInit } from '@angular/core';
import { Regin } from './regin';
import { ReginService } from './regin.service';

@Component({
  selector: 'my-regin',
  providers: [ ReginService ],
  templateUrl: './regin-form.html',
  styleUrls: ['../../forms.css']
})
export class ReginForm implements OnInit {
	title = '注册';

	errorMessage: string;
  regin: Regin[];
  mode = 'Observable';
  
  constructor (private reginService: ReginService) {}
  
  ngOnInit() {  }
  model = new Regin('Dr IQ', 'Chuck Overstreet');

  submitted = false;

  onSubmit(reginForm:any) {
  	console.log('输出对象:' +reginForm);
  	this.submitted = true;
  	console.log('继续执行');
  	this.reginService.create(reginForm.name, reginForm.nick).subscribe(
       hero  => this.regin = hero,
       error => this.errorMessage = <any>error);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
  	return JSON.stringify(this.model); }

  newRegin() {
    this.model = new Regin('', '');
  }

  skyDog(): Regin {
    let myRegin =  new Regin('SkyDog',
                           'Fetch any object at any distance');
    console.log('My hero is called ' + myRegin.name); // "My hero is called SkyDog"
    return myRegin;
  }

  //////// NOT SHOWN IN DOCS ////////

  /////////////////////////////
}