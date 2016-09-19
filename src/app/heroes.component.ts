import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'my-heroes',
    styleUrls: ['app/heroes.component.css'],
    templateUrl: 'app/heroes.component.html',
    providers: [HeroService]
})
export class HeroesComponent implements OnInit  { 

    heroes: Hero[];
    private family = [];
    private isLoading = true;
    selectedHero: Hero;

    constructor(private heroService: HeroService,
        private router: Router,
        private activeRoute: ActivatedRoute) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    getPersons(id: Number) {
        this.heroService.getPerson(id).subscribe(
            data => this.family[0] = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    ngOnInit(): void {
        
        console.log(this.activeRoute);
        this.activeRoute.params.forEach((params: Params) => {
            let id = +params['id'];
            console.log("Selected id " + id);
            if(id >= 0) {
               this.getPersons(id);
            } else {
                this.getPersons(0);
            }
            
        });
    }

    onSelect(hero: Hero): void {
        console.log("Ok i click");
        this.selectedHero = hero;
        this.getPersons(hero._id);
    }

}