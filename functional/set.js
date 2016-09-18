'use strict';

var Set = function() {

    var setInstance = {}
    var elements = [];

    setInstance.add = function(element) {
        if (elements.indexOf(element) === -1) {
            elements.push(element);
        }
    };

    setInstance.remove = function(element){

    };

    setInstance.isEmpty =function() {
        return elements.length > 0 ? false : true;
    };

    setInstance.size = function(){

    };

    setInstance.contains = function(element) {

    };

    setInstance.union = function(s) {
        var resultSet = s.clone();
        for (var i = 0; i < elements.length; i++) {
            resultSet.add(elements[i]);
        }
        return resultSet;
    };

    setInstance.clone = function() {
        var s = Set();
        for (var i = 0; i < elements.length; i++) {
            s.add(elements[i]);
        }
        return s;
    };

    return setInstance;
};

module.exports = Set;
