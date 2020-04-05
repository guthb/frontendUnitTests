import { TestBed, ComponentFixture } from '@angular/core/testing'
import { HeroComponent } from './hero.component'
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


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

    let deAnchor = fixture.debugElement.query(By.css('a'));
    expect(deAnchor.nativeElement.textContent).toContain('fred');

    //expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('fred'); //same

    //expect(fixture.nativeElement.querySelector('a').textContent).toContain('fred') //same
  })

})
