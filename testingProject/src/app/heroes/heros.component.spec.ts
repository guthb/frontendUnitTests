import { HeroesComponent } from './heroes.component'
import { of } from 'rxjs';


describe('HerosComponent', () => {
  let component: HeroesComponent
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'ma', strength: 8 },
      { id: 1, name: 'pa', strength: 8 },
      { id: 1, name: 'sallyJo', strength: 53 }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);

  })

  describe('delete', () => {

    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2); //not a real good test, this is state based

    })

    it('should call deleteHero with correct hero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })


  })
})
