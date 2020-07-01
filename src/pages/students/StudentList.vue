<template>
    <centered-content>
        <page-title subtitle="List of students">
            Students
        </page-title>

        <q-card>
            <q-card-section>
                <q-table
                    flat
                    :data="data"
                    :columns="columns"
                    row-key="name"
                >

                    <template v-slot:body-cell-name="props">
                        <q-td :props="props">
                        <q-avatar class="q-mr-sm">
                            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8_T25h9p7SA5aEJBdWNbQnGWgscqDVUPhiLv9m=s83-c-mo">
                        </q-avatar>
                        {{ props.value }}
                        </q-td>
                    </template>
                    <template v-slot:body-cell-originCountry="props">
                        <q-td :props="props">
                            <flag country="br" :size="24"/>
                        </q-td>
                    </template>

                    <template v-slot:body-cell-status="props">
                        <q-td :props="props">
                            <q-chip size="md" color="light-green" text-color="white" class="text-weight-medium">
                                {{ props.value }}
                            </q-chip>
                        </q-td>
                    </template>

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
    import Flag from "../../components/Flag";
    export default {
        name: 'StudentList',
        components: {Flag, CenteredContent, PageTitle},
        data: () => ({
            columns: [
                {
                    name: 'name',
                    label: 'Student',
                    align: 'left',
                    field: row => row.name,
                },
                {
                    name: 'originCountry',
                    label: 'From',
                    align: 'left',
                    field: row => row.originCountry,
                },
                {
                    name: 'household',
                    label: 'Household',
                    align: 'left',
                    field: row => row.household,
                },
                {
                    name: 'status',
                    label: 'Status',
                    align: 'center',
                    field: row => row.status,
                },
                {
                    name: 'actions',
                    align: 'right',
                }
            ],
            data: [
                {
                    name: "Walter Barros Galvão Neto",
                    originCountry: 'br',
                    city: 'Vancouver',
                    household: "Leonardo's Family",
                    status: 'Allocated'
                },
            ]
        })
    }
</script>
