const { environment } = require('@rails/webpacker')
    //追記
const webpack = require('webpack')
environment.plugins.prepend('Provide',
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    )
    //ここまで
module.exports = environment