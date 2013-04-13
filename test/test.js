var expect = require('chai').expect

describe('MinFunctor', function () {
  var MinFunctor = require('../index').MinFunctor

  it('...must provide a map method. The map method takes one argument:', function () {

    var u = new MinFunctor

    // f must be a function,
    var f = function () {}

    // If f is not a function, the behaviour of map is unspecified.
    // f can return any value.
    // map must return a value of the same functor

    expect( u.map(f) ).to.be.instanceof(MinFunctor);

  })

})

describe('MinMonad', function () {

  var MinMonad = require('../index').MinMonad

  it('must provide a constructor object.', function () {

    var m = new MinMonad

    expect( m ).to.have.property('constructor')

  })

  it('must provide a then method. The then method takes one argument:', function () {

    var m = new MinMonad

    expect( m ).to.have.property('then')
    expect( m.then ).to.be.a('function')

  })

  describe('#then', function () {

    it('has parameter f')
    // f must be a function which returns a value
    // If f is not a function, the behaviour of then is unspecified.
    // f must return a value of the same monad

    it('must return a value of the same monad', function () {

      var m = new MinMonad

      expect( m.then(function () {}) ).to.be.instanceof(MinMonad)

    })

  })

  it('The constructor object must have an of method which takes one argument:', function () {

    var m = new MinMonad

    expect( m.constructor ).to.have.property('of')
    expect( m.constructor.of ).to.be.a('function')

  })

  describe('#constructor.of', function () {
    it('must provide a value of the same monad', function () {

      var m = new MinMonad

      expect( m.constructor.of('foo') ).to.be.instanceof(MinMonad)

    })

    // I'm not sure how to specify this in a test
    it('"no parts of a should be checked" - should not check the parameter of `of`')

  })




})