# v-flexible-resource
A Vue mixin that allows you to get resource data from [FlexibleResource](https://github.com/SUKOHI/FlexibleResource) which is a Laravel package.

# Installation

    npm i v-flexible-resource --save

# Dependency

This package uses [axios](https://github.com/axios/axios) to get resource data through Ajax.

# Usage

## Basic usage

This package automatically `Vue.mixin()`.  
So, you don't need to set `mixins`.

    <script src="/PATH/TO/YOUR/FOLDER/v-flexible-resource/resource.js"></script>
    <script>
    
        new Vue({
            el: '#app',
            data: {
                userTypes: {},
                userTypeCollection: []
            },
            mounted() {
    
                var keys = ['userTypes', 'userTypeCollection'];
                this.resource(keys, function(data){
    
                    console.log(data);
    
                });
    
            }
        })
    
    </script>

## Resource URL

You can change resource URL by overwriting `resourceUrl`.  

    new Vue({
        el: '#app',
        data: {
            resourceUrl: '/YOUR/RESOURCE/URL'
        },
        mounted: function() {
        
            // ...
        
        }
    });

# License

This package is licensed under the MIT License.

Copyright 2018 Sukohi Kuhoh