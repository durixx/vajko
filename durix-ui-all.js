


(function ($, window, undefined) {
    var $extend = $.extend;
    var $ajax = $.ajax;
    window.durixUI= {};


    var __meta__ = {
        id: 'core',
        name: 'Core',
        description: 'Zaklad durixUI'
    };
    durixUI.Class = function() {
        var parent = this;
        var operations = $extend(operations, {
           ajax: function (e) {
               e = $extend(e, {
                   success: function (e) {
                       console.log(e);
                   }
               });
               $ajax(e);
           } 
        });
        this.data = $extend(this.data, operations);
        


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
                    var parent = this;
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

                            return this._hasTransportCreateDataType() && this._hasTransportCreateUrl();
                        }

                    };
                    this.fn = {
                        init: function (optionals) {

                            var o = Object.create(new init());
                            this._performQuery({}, optionals);
                            o.__proto__ = $extend(o.__proto__, this);
                            console.log(this);
                            return o;
                        },
                        _performQuery: function (type, isNew) {
                            if(isNew) {
                                this._performCreateQuery(data)
                            }
                        },
                        _performCreateQuery: function (data) {
                            if(parent.constructorInit._hasTransportCreate()) {
                                var ajaxData = {
                                    method: 'GET',
                                    url: data.transport.create.url,
                                    dataType: data.transport.create.dataType
                                };
                                parent.data.ajax(ajaxData)
                            }
                        }
                    };


                    return this.fn.init(true);
                };
                console.log(parent, "parent");
                var that = parent.DataSource;
                that.prototype = new root.Class();
                that.prototype.constructor = that;


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







