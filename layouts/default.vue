<template>
    <Head>
            <Title>Prenotiamo!</Title>
            <Meta name="description" content="Prenotiamo!.app" />
    </Head>
    <div class="wrapper">
        <header class="head">
            <div class="pt-5 pb-5 bg-sky-400 grid grid-cols-13">
                <img class="col-start-5" src="/img/splash_screen.jpeg" width="120" height="150" alt="prenotiamo splash screen" />
                <div class="text-7xl col-end-7 font-semibold">Prenotiamo!</div>
                <div class="text-3xl col-start-11 pt-5 font-semibold">Login</div>
            </div>
        </header>
        <nav class="navlinks">
            <ul class="text-end">
                <li class="font-medium"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="font-medium"><NuxtLink to="/menu">Menu</NuxtLink></li>
                <li class="font-medium"><NuxtLink to="/prenota">Prenota</NuxtLink></li>
                <li class="font-medium"><NuxtLink to="/storico">Storico</NuxtLink></li>
            </ul>
        </nav>
        <main class="main-content text-3xl text-center bg-gray-50">
            <slot />
        </main>
    </div>
</template>

<style>
    .wrapper{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 1fr;
        row-gap: 50px;
    }
    .head{
        grid-column-start: 1;
        grid-column-end: 9;
    }
    .navlinks{
        grid-column-start: 1;
        grid-column-end: 2;
    }
    .main-content{
        grid-column-start: 2;
        grid-column-end: 8;
    }
</style>
