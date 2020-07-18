<template>
    <q-avatar :size="size" :color="image ? null : color" :text-color="textColor">
        <img :src="image" v-if="image">
        <template v-else>
            {{ initials }}
        </template>
    </q-avatar>
</template>

<script>
    export default {
        name: 'UserAvatar',
        props: {
            size: {
                type: String,
                default: "128px"
            },
            name: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: "white"
            },
            textColor: {
                type: String,
                default: "grey-10"
            },
            image: {
                type: String,
                required: false,
                default: null
            },
        },
        computed: {
            initials() {
                return this.name.split(" ").map((n,i,a)=> i === 0 || i+1 === a.length ? n[0] : null).join("");
            }
        }
    }
</script>
