import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeroesComponent } from './heroes.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser'

describe('HeroesComponent (shallow test)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  //mock child
  @Component({
    selector: 'app-hero',
    template: '<div></div>',
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
    //@Output() delete = new EventEmitter();
  }

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'ma', strength: 8 },
      { id: 1, name: 'pa', strength: 8 },
      { id: 1, name: 'sallyJo', strength: 53 }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, FakeHeroComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA] //will hide error in template
    })
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from the service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES))
    fixture.detectChanges();
    //expect(true).toBe(true);

    expect(fixture.componentInstance.heroes.length).toBe(3);

  })

  it('should create one li for each hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES))
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3)
  })

})
