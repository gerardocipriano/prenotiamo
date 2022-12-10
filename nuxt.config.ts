import { Head } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    srcDir: "src",
    css:[
        "bootstrap/dist/css/bootstrap.css"
    ],
    PrivateruntimeConfig: {
        databaseName: process.env.DB_HOSTNAME,
        serviceUserName: process.env.DB_SERVICE_USER,
        serviceUserPassword: process.env.DB_SERVICE_USER_PASSWORD,
        serviceAdmin: process.env.DB_SERVICE_ADMIN,
        serviceAdminPassword: process.env.DB_SERVICE_ADMIN_PASSWORD,

    }
})

// generating the html page fot 404 code
generate: { fallback: '404.html' }  
