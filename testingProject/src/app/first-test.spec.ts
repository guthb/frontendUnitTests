describe('my first test', () => {
  let sut;  //system under test

  beforeEach(() => {
    sut = {}  //reset
  })

  it('should be true if true', () => {
    //arrange

    sut.a = false;

    // action

    sut.a = true;

    // assert

    expect(sut.a).toBe(true)
  })

})

// describe ('user service', () => {

//   describe('getUser method', () => {
//     it('should retrieve the correct user')
//   })
// })
