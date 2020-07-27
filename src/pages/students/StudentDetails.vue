<template>
    <div>

        <div class="text-center">
            <q-avatar class="q-mr-sm" size="128px">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8_T25h9p7SA5aEJBdWNbQnGWgscqDVUPhiLv9m=s83-c-mo">
            </q-avatar>
            <h5 class="q-my-sm">Walter Galvão</h5>
        </div>

        <q-list separator >
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="las la-user" color="grey-6"></q-icon>
                </q-item-section>
                <q-item-section>Account</q-item-section>
            </q-item>


            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="las la-hamburger" color="grey-6"></q-icon>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Food Preferences</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="las la-flag" color="grey-6"></q-icon>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Issues</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="las la-comment" color="grey-6"></q-icon>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Feedbacks</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
    export default {
        name: 'StudentDetails',
        data: () => ({})
    }
</script>
