<template>
    <div>
        <p>Storico Ordini di {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>