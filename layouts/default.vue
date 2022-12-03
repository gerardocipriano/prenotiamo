<template>
    <Head>
            <Title>Prenotiamo!</Title>
            <Meta name="description" content="Prenotiamo!.app" />
    </Head>
        <header>
            <div class="pt-5 pb-5 bg-sky-400 grid grid-cols-13">
                <img class="col-start-5" src="/img/splash_screen.jpeg" width="120" height="150" alt="prenotiamo splash screen" />
                <div class="text-7xl col-end-7 font-semibold">Prenotiamo!</div>
                <div class="text-3xl col-start-11 pt-5 font-semibold">Login</div>
            </div>
        </header>
            <nav>
                <ul class="flex flex-row justify-center">
                    <li class="basis-20 font-medium"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="basis-20 font-medium"><NuxtLink to="/menu">Menu</NuxtLink></li>
                    <li class="basis-20 font-medium"><NuxtLink to="/prenota">Prenota</NuxtLink></li>
                    <li class="basis-20 font-medium"><NuxtLink to="/storico">Storico</NuxtLink></li>
                </ul>
            </nav>
            <div class="text-3xl text-center bg-gray-100">
                <slot />
            </div>
       
</template>

