'use strict';
import {expect} from 'chai';
import THREE from 'three';
import OBJLoader from '../source/';

describe('OBJLoader Wrapper', ()=>{
  it('THREE does not contain OBJLoader by default', ()=>{
    expect(THREE.OBJLoader).to.be.a('undefined');
  });

  it('Assigns THREE.OBJLoader as a function once called', ()=>{
    OBJLoader(THREE);
    expect(THREE.OBJLoader).to.be.a('function');
  });
});
