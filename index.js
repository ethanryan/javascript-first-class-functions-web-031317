function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function name() {
    'hi, my name is'
  }
}

function returnsAnAnonymousFunction() {
  return function () {
    "shhhh"
  }
}
