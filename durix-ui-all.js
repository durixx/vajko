


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
            ajax: function (e, scope, type) {
                e = $extend(e, {
                    success: function (data, success, status) {

                    },
                    error: function (status) {

                    }
                });
                $ajax(e).done(function(data, success, status) {
                    scope._afterAjax(status, type);
                });
            }
        });
        this.data = $extend(this.data, operations);

        function guid() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
    };
    (function (root) {
        (function () {
            var __meta__ = {
                id: 'observable',
                name: 'Observable',
                description: 'Objekt Observable sluziaci na bindovanie a pridelovanie Eventov na objekt'
            };

            function i() {

            }
            function init() {

            }
            init.prototype = new i();
            init.prototype.constructor = init;

            root.Observable = function () {

            };

            var that = root.Observable;
            that.prototype = new root.Class();
            that.prototype.constructor = that;
            that.prototype.object = {};

            (function () {
                var __meta__ = {
                    id: 'data',
                    name: 'data',
                    description: ''
                };

                var TYPE_CREATE = "create";
                var REQUEST_GET = "get";
                var DATA_TYPE_JSON = "json";
                var STATUS_OK = 200;

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

                        var o = Object.create(new init());
                        var parent = this;
                        var isNew = true;
                        var data = {

                        };

                        data = $extend (data, e);
                        this.constructorInit =  {
                            _hasData: function () {
                                return data.data !== undefined;
                            },
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
                                    data.transport.create.dataType = DATA_TYPE_JSON;
                                }

                                return this._hasTransportCreateDataType() && this._hasTransportCreateUrl();
                            }

                        };
                        this.fn = {
                            init: function (e) {
                                var optional = $extend(optional, e);

                                this.read();

                                o._pristineData = [];
                                o.transport = {};
                                o._data = Object.create(new init(2));
                                o.__proto__ = $extend(o.__proto__, this);

                                console.log(this);
                                return o;
                            },
                            read: function () {
                                this._performQuery(TYPE_CREATE, isNew);
                                isNew = false;
                            },
                            _performQuery: function (type, isNew) {
                                if(isNew && type === TYPE_CREATE) {
                                    this._performCreateQuery(data, type)
                                }
                            },
                            _performCreateQuery: function (data, type) {
                                if(parent.constructorInit._initTransportCreate()) {
                                    var ajaxData = {
                                        method: data.transport.create.dataType,
                                        url: data.transport.create.url,
                                        dataType: data.transport.create.dataType
                                    };
                                    var result = parent.data.ajax(ajaxData, this, type);

                                }else if(!parent.constructorInit._hasTransport() && parent.constructorInit._hasData()) {

                                }
                            },
                            _afterAjax: function (status, type) {
                                console.log(status, "funguje?");
                                if(status.status === STATUS_OK) {
                                    o._pristineData = status.responseJSON;
                                    o._data = Object.create(new init());
                                    o._data = $extend(o._data, o._pristineData);
                                    o._data.length = o._pristineData.length;
                                    for(var i = 0; i < o._data.length; i++) {
                                        //o._data.i.uid = guid();
                                    }
                                    if(type === TYPE_CREATE) {
                                        o.transport.options = {};
                                        console.log(data);
                                        o.transport.options.read = data.transport.create;

                                    }
                                }
                            }
                        };


                        return this.fn.init(isNew);
                    };
                    console.log(parent, "parent");
                    var that = parent.DataSource;
                    that.prototype = new root.Class();
                    that.prototype.constructor = that;


                })(that)

            })()
            
        })();


        

    })(window.durixUI);
    ret = false;
    console.log("finished");
})($, window);




//var y = Object.create(i);
//var x = Object.create(new init());

//x.prop = 5;
//x.__proto__.read = function () {







