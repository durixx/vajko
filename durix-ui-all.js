


(function ($, window, undefined) {
    var $extend = $.extend;
    window.durixUI= {};
    var ret = true;

    var __meta__ = {
        id: 'core',
        name: 'Core',
        description: 'Zaklad durixUI'
    };
    durixUI.Class = function() {
        var init = {};
        this.decideWhatToReturn = function (meta, data) {
            if(ret) {
                return meta
            }else {
                return data;
            }
        };

        return this.decideWhatToReturn(this, init);
    };


    (function (root) {
        (function () {
            var __meta__ = {
                id: 'observable',
                name: 'Observable',
                description: 'Objekt Observable sluziaci na bindovanie a pridelovanie Eventov na objekt'
            };

            root.Observable = function () {
                var init = {};
                this.decideWhatToReturn(this, init);
            };

            var that = root.Observable;
           that.prototype = new root.Class();
           that.prototype.constructor = that;


            
        })();

        (function () {
            var __meta__ = {
                id: 'dataSource',
                name: 'data_source',
                description: ''
            };

            root.dataSource = {
            };
            var that = root.dataSource;

            (function (parent) {
                var __meta__ = {
                    id: 'data',
                    name: 'Data',
                    description: ''
                };

                parent.Data = function () {
                    var data = {};
                    return this.decideWhatToReturn(this, data);
                };

                var that = parent.Data;
                that.prototype = new root.Class();
                that.prototype.constructor = this;
            })(that)

        })()
        

    })(window.durixUI);
    ret = false;
    console.log("finished");
})($, window);