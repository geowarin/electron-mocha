var expect = require('expect')
var mocha = require('mocha')

var electron =  require('electron');
var remote = electron.remote;

describe('describe things', function () {
  it('remote is defined', function () {
    expect(remote).toExist()
  })
})
