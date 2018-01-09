


(function ($, window, undefined) {
    var $extend = $.extend;
    window.durixUI= {};


    var __meta__ = {
        id: 'core',
        name: 'Core',
        description: 'Zaklad durixUI'
    };
    durixUI.Class = function() {

    };

    function i() {

    }

    function init() {

    }
    init.prototype = new i();
    init.prototype.constructor = init;

    (function (root) {
        (function () {
            var __meta__ = {
                id: 'observable',
                name: 'Observable',
                description: 'Objekt Observable sluziaci na bindovanie a pridelovanie Eventov na objekt'
            };

            root.Observable = function () {

            };

            var that = root.Observable;
            that.prototype = new root.Class();
            that.prototype.constructor = that;
            that.prototype.object = {}


            
        })();

        (function () {
            var __meta__ = {
                id: 'dataSource',
                name: 'data_source',
                description: ''
            };

            root.data = {
            };
            var that = root.data;


            (function (parent) {
                var __meta__ = {
                    id: 'dataSource',
                    name: 'Data_Source',
                    description: ''
                };

                parent.DataSource = function (e) {
                    var data = {

                    };

                    data = $extend (data, e);
                    this.constructorInit =  {
                        _hasTransport: function () {
                            return data.transport !== undefined;
                        },
                        _hasTransportCreate: function() {

                            if(this._hasTransport()) {
                                return data.transport.create !== undefined;
                            }
                        },
                        _hasTransportCreateUrl: function () {
                            if(this._hasTransportCreate()) {
                                return data.transport.create.url !== undefined;
                            }
                        },
                        _hasTransportCreateDataType: function () {
                            if(this._hasTransportCreate()) {
                                return data.transport.create.dataType !== undefined;
                            }
                        },
                        _initTransportCreate: function () {
                            if(!this._hasTransportCreateDataType() && this._hasTransportCreateUrl()) {
                                data.transport.create.dataType = "json";
                            }
                        }

                    };
                    this._init = function () {
                          return Object.create(new init());
                    };

                    return this._init();
                };

                var that = parent.DataSource;
                that.prototype = new root.Class();
                that.prototype.constructor = that;
                that.prototype.object = {}

            })(that)

        })()
        

    })(window.durixUI);
    ret = false;
    console.log("finished");
})($, window);




//var y = Object.create(i);
//var x = Object.create(new init());

//x.prop = 5;
//x.__proto__.read = function () {







