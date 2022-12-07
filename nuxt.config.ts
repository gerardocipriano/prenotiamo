import { Head } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    css:[
        "bootstrap/dist/css/bootstrap.min.css"
    ]
})

// generating the html page fot 404 code
generate: { fallback: '404.html' }  
