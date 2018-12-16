/* Dependencies: axios */

var resourceMixin = {
    data: {
        resourceUrl: '/resource'
    },
    methods: {
        resource: function(keys, callback) {

            var self = this;

            if(typeof keys === 'string') {

                keys = [keys];

            }

            var params = {
                params: {
                    keys: keys.join('|')
                }
            };
            axios.get(this.resourceUrl, params).then(function(json){

                var data = json.data;

                for(var key in data) {

                    Vue.set(self, key, data[key]);

                }

                if(typeof callback === 'function') {

                    Vue.nextTick(function() {

                        callback(data);

                    });

                }

            });

        }
    }
};