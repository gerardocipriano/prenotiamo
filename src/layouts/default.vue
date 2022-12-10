<template>
    <Head>
            <Title>Prenotiamo!</Title>
            <Meta name="description" content="Prenotiamo!.app" />
            <Meta charset="utf-8" />
            <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div class="container-fluid min-vh-100">
        <div class="row justify-content-center">
            <div class="col-10 bg-light min-vh-100 border-bottom border-2 border-secondary border-opacity-50 rounded">
                <header>
                    <div class="bg-primary row border-top border-bottom border-2 border-secondary border-opacity-50 rounded">
                        <div class="col-5 my-3 text-end">
                            <img class="border border-2 border-secondary border-opacity-50 rounded img-fluid" src="/img/splash_screen.jpeg" width="120" height="150" alt="prenotiamo splash screen" />
                        </div>
                        <div class="col-3">
                            <div class="fw-semibold my-4 fs-1">Prenotiamo!</div>
                        </div>
                        <div class="col-4 text-end d-flex flex-row justify-content-end">
                            <div class="row">
                                <div class="col-12 fw-semibold mt-5 mr-2 text-center d-none d-md-block">Non sei registrato?</div>
                                <div class="col-12 text-center align-self-end pb-1">
                                    <NuxtLink class="btn btn-dark" to="/signup">Sign Up</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="row mt-3">
                    <nav class="col-md-1 mb-3">
                        <ul class="nav flex-md-column flex-row text-end justify-content-around">
                            <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none fw-semibold" to="/">Home</NuxtLink></li>
                            <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none fw-semibold" to="/menu">Menu</NuxtLink></li>
                            <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none fw-semibold" to="/prenota">Prenota</NuxtLink></li>
                            <li class="nav-item border-bottom border-primary"><NuxtLink class="text-dark text-decoration-none fw-semibold" to="/storico">Storico</NuxtLink></li>
                        </ul>
                    </nav>
                    <main class="col-md-11">
                        <slot />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

