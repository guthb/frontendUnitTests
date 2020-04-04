import { TestBed, ComponentFixture } from '@angular/core/testing'
import { HeroComponent } from '../hero/hero.component'
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('HeroComponet (shallow test)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]  //this is a hack that will hide real issues
    });

    fixture = TestBed.createComponent(HeroComponent);

  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'fred', strength: 4 };

    expect(fixture.componentInstance.hero.name).toEqual('fred');
  });

  it('should renter the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'fred', strength: 4 };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('fred')
  })

})
