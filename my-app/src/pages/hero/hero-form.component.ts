import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-form',
  providers: [ HeroService ],
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent implements OnInit{
	
	errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';
  
  page = 0;
  size = 10;
  totalPages = 1;

  constructor (private heroService: HeroService) {}

  ngOnInit() { this.getHeroes(this.page, this.size, this.totalPages); }
  
  getHeroes(page: number, size: number, totalPages: number) {
  	console.log('page:'+ page);
  	console.log('size:'+ size);
  	console.log('totalPages:'+ totalPages);
  	if (totalPages-1 < page || page < 0) { return; }
    this.heroService.getHeroes(page, size).subscribe(
    	heroes => this.heroes = heroes,
    	error => this.errorMessage = <any>error);
    	
  }
  addHero(name: string, nick: string) {
    if (!name) { return; }
    this.heroService.create(name, nick).subscribe(
       heroes  => this.heroes = heroes,
       error => this.errorMessage = <any>error);
  }

}