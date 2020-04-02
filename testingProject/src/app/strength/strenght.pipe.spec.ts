import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strenght is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  })

  it('should disply strong if strenght is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  })
})
