import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

const ITEMS: String[] = [
     'All Heroes',
     'Top Heroes',
     'Bad Heroes',
     'Good Heroes',
     'Women Heroes',
     'Titanic Team'];

@Component({
    selector: 'my-menu',
    styleUrls: ['app/menu.component.css'],
    templateUrl: 'app/menu.component.html'
})
export class MenuComponent implements OnInit  { 
    menuItems = ITEMS;

    constructor(private heroService: HeroService,
        private router: Router) { }

    ngOnInit(): void {
    }


    onSelect(hero: Hero): void {
        console.log("Ok i click");
        // this.router.navigate(['hero/', this.selectedHero.id]);
    }

}