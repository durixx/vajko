


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
            ajax: function (e, scope) {
                e = $extend(e, {
                    success: function (data, success, status) {

                    },
                    error: function (status) {

                    }
                });
                $ajax(e).done(function(data, success, status) {
                    scope._afterAjax(status);
                });
            }
        });
        this.data = $extend(this.data, operations);
        


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
                                    data.transport.create.dataType = "json";
                                }

                                return this._hasTransportCreateDataType() && this._hasTransportCreateUrl();
                            }

                        };
                        this.fn = {
                            init: function (e) {
                                var optional = $extend(optional, e);

                                this.read();
                                o._pristineData = [];
                                o._data = Object.create(new init());
                                o.__proto__ = $extend(o.__proto__, this);
                                console.log(this);
                                return o;
                            },
                            read: function () {
                                this._performQuery({}, isNew);
                                isNew = false;
                            },
                            _performQuery: function (type, isNew) {
                                if(isNew) {
                                    this._performCreateQuery(data)
                                }
                            },
                            _performCreateQuery: function (data) {
                                if(parent.constructorInit._initTransportCreate()) {
                                    var ajaxData = {
                                        method: 'GET',
                                        url: data.transport.create.url,
                                        dataType: data.transport.create.dataType
                                    };
                                    var result = parent.data.ajax(ajaxData, this);

                                }else if(!parent.constructorInit._hasTransport() && parent.constructorInit._hasData()) {

                                }
                            },
                            _afterAjax: function (status) {
                                console.log(status, "funguje?");
                                if(status.status === 200) {
                                    o._pristineData = status.responseJSON;
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







