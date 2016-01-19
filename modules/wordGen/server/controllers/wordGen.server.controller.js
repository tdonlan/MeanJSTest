'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


var thesaurusKey = 'NQ9x90OYIxSGO80qcCVA';
var thesaurusURL = 'http://thesaurus.altervista.org/thesaurus/v1';

var filePath = './public/';

exports.getWeapon = function(req,res){
    var promise = readFile('weapons.txt');
    promise.then(function(rsp){
       res.json(rsp.toString());
    })
    .catch(function(err){
        res.json(err);
    });
};

exports.getSyn = function(req,res){

    var thesPromise = callThesaurus('death');

    thesPromise.then(function(rsp){
        res.json(getWord(rsp));
    },function(err){
        res.json(err);
    });
};

exports.getSynWord = function(req,res, word){

    var thesPromise = callThesaurus(word);

    thesPromise.then(function(rsp){
        res.json(getWord(rsp));
    },function(err){
        res.json(err);
    });

};

exports.helloWorld = function (req, res) {

    var obj = {firstname: "Tim", lastname: "Donlan"};
    console.log(obj);
    res.json(obj);
};



function readHostedFile(fileName){
    return  callURLSync(fileName);
}

function readFile(filename){
    var readFile = require('fs-readfile-promise');
    var q = require('q');
    var p = path.resolve(filePath + filename);
    return q.all(readFile(p));
}

function getWord(thesRsp){

    var thesObject = JSON.parse(thesRsp);
    if(thesObject){
        if(thesObject.response[0]){
            if(thesObject.response[0].list)
            if(thesObject.response[0].list.synonyms){
                return randomSplit(thesObject.response[0].list.synonyms,'|');
            }
        }
    }
    return thesObject;
}

function randomSplit(list, delim){
    var splitList = list.split(delim);
    if(splitList){
        return  splitList[Math.floor(Math.random()*splitList.length)];
    }

    return list;
}

function callThesaurus(word){
    var url = thesaurusURL + "?word=" + word + "&language=en_US&output=json&key=" + thesaurusKey;
    return callURLSync(url);
}


function callURLSync(url){
    var rp = require('request-promise');
    var q = require('q');
    return q.all(rp(url));
}



