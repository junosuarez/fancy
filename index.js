var MinFunctor = function () {}

MinFunctor.prototype.map = function (f) {
  if (typeof f !== 'function') {
    throw new TypeError('not a function')
  }
  return this
}

module.exports.MinFunctor = MinFunctor



var MinMonad = function () {

}

MinMonad.of = function () {
  return new MinMonad
}

MinMonad.prototype.then = function () {
  return new MinMonad
}

module.exports.MinMonad = MinMonad
