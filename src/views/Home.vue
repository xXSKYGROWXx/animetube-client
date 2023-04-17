<script setup>
</script>

<template>
    <div class="main">
        <!-- carousel -->
        <div class="carousel">

        </div>

        <div class="trailer">
            <p class="textTrailer"> Trailer </p>
            <!-- DA FIXARE L'ANIMAZIONE <p style="transform: translate3d(-1710px, 0px, 0px); transition: all 0.25s ease 0s; width: 4104px;">  </p> -->
        </div>
    </div>
</template>

<style scoped>
    .main {
        height: 93.8vh;
    }

    .carousel {
        height: 46.9vh;
    }

    .trailer {
        background: var(--secondary-background);
        height: 46.9vh;
    }

    .textTrailer {
        color: var(--text);
        font-size: 35px;
        margin-left: 5px;
        margin-top: 5px;
    }
</style>