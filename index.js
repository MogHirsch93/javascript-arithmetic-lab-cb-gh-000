function add(a,b){
  return a + b
}

function subtract(a,b){
  return a - b
}

function multiply(a,b){
  return a * b
}

  function divide(a,b){
    return a / b
  }

function inc(n){
  return n+=1
}

function dec(n){
  return n -=1
}

function makeInt(n){
  return parseInt(n, 10)
}

function isNan(){
}

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

function preserveDecimal(n){
  return parseFloat(n)
}

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
