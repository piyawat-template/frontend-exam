<template>
    <header class="bg-gray-300 text-center py-5">
        <h1 class="font-bold text-3xl">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    }
}
</script>
