import { Component } from '@angular/core';
import { Regin } from './regin';

@Component({
  selector: 'my-regin',
  templateUrl: './regin-form.html',
  styleUrls: ['../../forms.css']
})
export class ReginForm {
	title = '注册';

  model = new Regin('Dr IQ', 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

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

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////
}