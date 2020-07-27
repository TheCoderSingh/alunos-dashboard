<template>
    <span :class="['flag', 'flag-icon', 'flag-icon-' + country]" :style="{'font-size': `${size}px`}"></span>
</template>

<script>
    export default {
        name: 'Flag',
        props: {
            country: {
                type: String,
                required: true,
            },
            size: {
                type: Number,
                default: 24,
            },
        }
    }
</script>

<style lang="scss">
    .flag {
        border-radius: 2px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
</style>
