/* Dependencies: axios */

Vue.mixin({
    data: () => {
        return {
            resourceUrl: '/resource'
        };
    },
    methods: {
        resource(keys, callback) {

            if(typeof keys === 'string') {

                keys = [keys];

            }

            var params = {
                params: {
                    keys: keys.join('|')
                }
            };
            axios.get(this.resourceUrl, params).then((json) => {

                var data = json.data;

                for(var key in data) {

                    Vue.set(this, key, data[key]);

                }

                if(typeof callback === 'function') {

                    Vue.nextTick(function() {

                        callback(data);

                    });

                }

            });

        }
    }
});