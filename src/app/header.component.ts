import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-header',
    styleUrls: ['app/header.component.css'],
    templateUrl: 'app/header.component.html'
})
export class HeaderComponent implements OnInit  { 

    constructor(private heroService: HeroService,
        private router: Router) { }

    ngOnInit(): void {
    }


    onSelect(hero: Hero): void {
        console.log("Ok i click");
        // this.router.navigate(['hero/', this.selectedHero.id]);
    }

}