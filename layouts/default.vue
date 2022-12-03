<template>
    <Head>
            <Title>Prenotiamo!</Title>
            <Meta name="description" content="Prenotiamo!.app" />
    </Head>
        <header>
            <div class="pt-5 pb-5 bg-sky-400 flex justify-center">
                <img class="" src="/img/splash_screen.jpeg" width="120" height="150" alt="prenotiamo splash screen" />
                <h1 class="text-7xl">Prenotiamo!</h1>
            </div>
        </header>
        <div class="flex flex-row">
            <nav  class="basis-1/8">
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/menu">Menu</NuxtLink></li>
                    <li><NuxtLink to="/prenota">Prenota</NuxtLink></li>
                    <li><NuxtLink to="/storico">Storico</NuxtLink></li>
                </ul>
            </nav>
            <div class=" basis-7/8 grow text-3xl text-center bg-gray-300">
                <slot />
            </div>
        </div>
</template>


<style lang="scss" scoped>

</style>