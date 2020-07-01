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
                    row-key="name"
                >
                    <template v-slot:body-cell-actions="props">
                        <q-td :props="props">
                            <q-btn round color="icon" flat icon="las la-ellipsis-v" />
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
    export default {
        name: 'HouseholdList',
        components: {CenteredContent, PageTitle},
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
                    field: row => row.type,
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
                    field: row => row.roomsAvailable,
                },
                {
                    name: 'actions',
                    align: 'right',
                }
            ],
            data: [
                {
                    name: "Leonardo's Family",
                    type: 'Homestay',
                    city: 'Vancouver',
                    roomsAvailable: '1/3',
                },
            ]
        })
    }
</script>
