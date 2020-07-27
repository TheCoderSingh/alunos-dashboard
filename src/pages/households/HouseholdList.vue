<template>
    <centered-content>
        <page-title subtitle="List of homestays and student houses">
            Households
        </page-title>

        <q-card>
            <q-card-section>
                <q-table
                    flat
                    :data="data"
                    :columns="columns"
                    :loading="isLoading"
                    row-key="name"
                >
                    <template v-slot:body-cell-name="props">
                        <q-td :props="props">
                            <q-avatar class="q-mr-sm">
                                <q-img :src="props.row.avatar.url"></q-img>
                            </q-avatar>
                            {{ props.value }}
                        </q-td>
                    </template>

                    <template v-slot:body-cell-actions="props">
                        <q-td :props="props">
                            <q-btn round color="icon" flat icon="las la-ellipsis-v">
                                <q-menu>
                                    <q-list style="min-width: 100px">
                                        <q-item clickable :to="{ name: 'households.details', params: { id: props.row.id } }">
                                            <q-item-section>View Details</q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </q-td>
                    </template>
                </q-table>
            </q-card-section>
        </q-card>
    </centered-content>
</template>

<script>
    import PageTitle from "../../components/dumb/PageTitle";
    import CenteredContent from "../../components/dumb/CenteredContent";
    import {mapActions, mapGetters} from "vuex";
    import {PAGINATE_HOUSEHOLDS_ACTION} from "../../constants";
    export default {
        name: 'HouseholdList',
        components: {CenteredContent, PageTitle},
        async created() {
            await this.paginate();
            this.isLoading = false;
        },
        data: () => ({
            columns: [
                {
                    name: 'name',
                    label: 'Name',
                    align: 'left',
                    field: row => row.name,
                },
                {
                    name: 'type',
                    label: 'Type',
                    align: 'left',
                    field: row => row.type.charAt(0).toUpperCase() + row.type.slice(1).toLowerCase(),
                },
                {
                    name: 'city',
                    label: 'City',
                    align: 'left',
                    field: row => row.city,
                },
                {
                    name: 'rooms',
                    label: 'Rooms Available',
                    align: 'left',
                    field: row => '1/3',
                },
                {
                    name: 'actions',
                    align: 'right',
                }
            ],
            isLoading: true,
        }),
        methods: {
            ...mapActions({
                paginate: PAGINATE_HOUSEHOLDS_ACTION
            })
        },
        computed: {
            ...mapGetters({
                data: 'getHouseholdPaginationData'
            })
        }
    }
</script>
