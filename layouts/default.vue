<template>
    <Head>
            <Title>Prenotiamo!</Title>
            <Meta name="description" content="Prenotiamo!.app" />
            <Meta charset="utf-8" />
            <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div class="container-fluid">
        <header>
            <div class="bg-primary row">
                <div class="col-5 my-3 text-end">
                    <img class="border border-2 border-dark img-fluid" src="/img/splash_screen.jpeg" width="120" height="150" alt="prenotiamo splash screen" />
                </div>
                <div class="col-3">
                    <div class="fw-semibold my-4 fs-1">Prenotiamo!</div>
                
                </div>
                <div class="col-4 text-end">
                    <div class="inline-block fw-semibold mt-5 mr-2  ">Non sei registrato?</div>
                    <a class="btn btn-dark" href="/registra" role="button">Sing up</a>
                </div>
            </div>
        </header>
        <div class="row mt-5">
            <nav class="col-1">
                <ul class="navbar-nav text-end">
                    <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none" to="/">Home</NuxtLink></li>
                    <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none" to="/menu">Menu</NuxtLink></li>
                    <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none" to="/prenota">Prenota</NuxtLink></li>
                    <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none" to="/storico">Storico</NuxtLink></li>
                </ul>
            </nav>
            <main class="col-11">
                <slot />
            </main>
        </div>
    </div>
</template>

