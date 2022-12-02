<template>
    <div>
        <img src="/img/splash_screen.jpeg" alt="prenotiamo splash screen" />
        <nav>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/menu">Menu</NuxtLink></li>
            <li><NuxtLink to="/prenota">Prenota</NuxtLink></li>
            <li><NuxtLink to="/storico">Storico</NuxtLink></li>
        </ul>
        </nav>
        <div>
            <slot />
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>