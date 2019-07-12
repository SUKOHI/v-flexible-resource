'use strict';

/* Dependencies: axios */

Vue.mixin({
    data: function data() {
        return {
            resourceUrl: '/resource'
        };
    },
    methods: {
        resource: function resource(keys, callback) {
            var _this = this;

            if (typeof keys === 'string') {

                keys = [keys];
            }

            var params = {
                params: {
                    keys: keys.join('|')
                }
            };
            axios.get(this.resourceUrl, params).then(function (json) {

                var data = json.data;

                for (var key in data) {

                    Vue.set(_this, key, data[key]);
                }

                if (typeof callback === 'function') {

                    Vue.nextTick(function () {

                        callback(data);
                    });
                }
            });
        }
    }
});