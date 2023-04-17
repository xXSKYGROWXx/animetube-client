<script setup></script>

<template>
	<div class="search-wrapper">
		<input type="text" class="search-input" />
	</div>
</template>

<style scoped>
.search-wrapper {
	margin: auto;
}

.search-input {
	border-radius: 50px;
	border: 0;
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	margin-left: 30%;
	user-select: none;
	outline: none;
	width: 60%;
	height: 20px;
	font-size: 1.5rem;
	background: var(--tertiary-background);
}
</style>
