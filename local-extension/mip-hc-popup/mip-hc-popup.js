/**
 * @file mip-hc-popup 组件
 * @author
 */

define(function (require) {
    var utilLibs = require('util');
    var customElement = require('customElement').create();
    var a = {a1:'a1',a2:'a2'},
        b = {b1:'b1',a2:'b2'};

    var $ = require('jquery');
    console.log($);


    $.ajax({
        url:'http://192.168.34.65:3366/imgsend/imgsend',
        type:'GET',
        success:function (opt){
            console.log(opt)
        }
    })

    // jsonp
    /*var fetchJsonp = require('fetch-jsonp');
    fetchJsonp('http://192.168.34.65:3366/imgsend/imgsend', {
        jsonpCallback: 'callbcak'
    }).then(function (res) {
        console.log(res)
        return res.json();
    }).then(function (data) {
        console.log(data);
    });
    */
    // fetch('http://192.168.34.65:3366/imgsend/imgsend').then(function (res) {
    //     console.log(res.text())
    //     // return res.text();
    // }).then(function (text) {
    //    console.log(text)
    // });


    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        var ele = this.element;
        var parentEl = ele.parentElement;
        var attRs = ele.attributes;
        var objVal = {};
        var hcAlert = '';
        for (var i in attRs) {
            objVal[attRs[i].name] = attRs[i].value;
        };
        if (objVal.target === undefined) {
            hcAlert = document.querySelector('#hc-alert');
        }
        else {
            hcAlert = document.querySelector('#' + objVal.target);
        }
        if (hcAlert !== null) {
            hcAlert.addEventListener('click', function () {
                parentEl.className = parentEl.className.replace(' hc-hide', '');
            });
        };
        parentEl.addEventListener('click', function () {
            this.className += ' hc-hide';
        }, false);
    };

    return customElement;
});
