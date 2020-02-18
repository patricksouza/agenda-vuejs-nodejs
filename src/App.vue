<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark shadow-sm">
            <a href="#" class="navbar-brand"><img src="../src/assets/img/agenda.png" alt=""></a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a href="/criar" class="nav-link">Adicionar</a>
                    <!--  <router-link to="/criar">Adicionar</router-link>-->
                </li>
                <li>
                    <a href="/contatos" class="nav-link">Pesquisar</a>
                </li>
            </div>
        </nav>

        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>