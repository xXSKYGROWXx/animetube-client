<script setup>
import Search from './SearchBar.vue'
import ProfileTooltip from './ProfileTooltip.vue'
</script>

<template>
    <header>
        <div class="title">
            <h1 class="primary">Anime</h1>
            <h1 class="secondary">Tube</h1>
        </div>
        <div class="controls">
            <Search />
            <ProfileTooltip />
        </div>
    </header>
</template>

<style scoped>
header {
    padding: 5px;
    background: var(--secondary-background);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

header h1 {
    display: inline;
}

.primary {
    color: var(--text);
}

.secondary {
    color: var(--secondary-text);
}

.controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
