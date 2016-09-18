'use strict';

class Set {
  constructor(){

  }

  add(element) {

  };

  remove(element){

  };

  isEmpty() {

  };

  size(){

  };

  contains(element) {

  };

  clone() {
      var s = new Set();
      for (var i = 0; i < this.elements.length; i++) {
          s.add(this.elements[i]);
      }
      return s;
  };

}

module.exports = Set;
