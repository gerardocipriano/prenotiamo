import { Head } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    srcDir: "src",
    nitro: {
        compressPublicAssets: true,
      },
    css:[
        "bootstrap/dist/css/bootstrap.css"
    ],
    runtimeConfig: {
        databaseName: process.env.DB_HOSTNAME,
        serviceUserName: process.env.DB_SERVICE_USER,
        serviceUserPassword: process.env.DB_SERVICE_USER_PASSWORD,
        serviceAdmin: process.env.DB_SERVICE_ADMIN,
        serviceAdminPassword: process.env.DB_SERVICE_ADMIN_PASSWORD,
        SMTPuser: process.env.SMTP_USERNAME,
        SMTPpass: process.env.SMTP_PASSWORD

    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
      },
    ssr: false
})

// generating the html page fot 404 code
{ '404.html' }  
