<template>
    <div>
        <div v-if="isLoading">
            Loading...
        </div>
        <template v-if="!isLoading">
            <div class="text-center">
                <q-avatar class="q-mr-sm" size="128px">
                    <q-img :src="household.avatar.url"></q-img>
                </q-avatar>
                <h5 class="q-my-sm">{{ household.name }}</h5>
            </div>

            <q-list separator class="q-mt-md">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="las la-user" color="grey-6"></q-icon>
                    </q-item-section>
                    <q-item-section>Residents</q-item-section>
                </q-item>


                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="las la-graduation-cap" color="grey-6"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Students</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section avatar>
                        <q-icon name="las la-bed" color="grey-6"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Rooms</q-item-label>
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
                        <q-icon name="las la-plane-arrival" color="grey-6"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Airport Pick-ups</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </template>
    </div>
</template>

<script>
    import {GET_HOUSEHOLD_DETAILS_ACTION} from "../../constants";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'HouseholdDetails',
        data: () => ({
            isLoading: true,
        }),
        async created() {
            await this.fetch(this.$route.params.id);
            this.isLoading = false;
        },
        methods: {
            ...mapActions({
                fetch: GET_HOUSEHOLD_DETAILS_ACTION
            }),
        },
        computed: {
            ...mapGetters({
                household: 'getHousehold'
            }),
        }
    }
</script>
