Wallaby = require('../wallaby.coffee')
Wallaby2 = require('../wallaby2.js')
assert = require('chai').assert

describe('Wallaby', ->
  model = null

  describe('wallaby #hello', ->
    it('should Return Hello', ->
      assert.equal(Wallaby.hello(), 'hello')
    )
  )
  describe('Wallaby2 #hello', ->
    it('should return hello', ->
      assert.equal(Wallaby2.hello(), 'hello')
    )
  )
)