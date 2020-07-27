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
                            <q-img :src="props.row.avatar"></q-img>
                        </q-avatar>
                        {{ props.value }}
                        </q-td>
                    </template>
                    <template v-slot:body-cell-originCountry="props">
                        <q-td :props="props">
                            <flag :country="props.value" :size="24"/>
                        </q-td>
                    </template>

                    <template v-slot:body-cell-status="props">
                        <q-td :props="props">
                            <q-chip size="md" :color="props.row.statusColor" text-color="white" class="text-weight-medium">
                                {{ props.value }}
                            </q-chip>
                        </q-td>
                    </template>

                    <template v-slot:body-cell-actions="props">
                        <q-td :props="props">
                            <q-btn round color="icon" flat icon="las la-ellipsis-v">
                                <q-menu>
                                    <q-list style="min-width: 100px">
                                        <q-item clickable :to="{ name: 'students.details', params: { id: 1 }, query: $router.currentRoute.query}">
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
                    name: 'age',
                    label: 'Age',
                    align: 'left',
                    field: row => row.age,
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
                    name: 'Antonella Ferraro',
                    household: "",
                    avatar: 'avatars/student4.jpg',
                    originCountry: 'it',
                    status: 'Awaiting Placement',
                    statusColor: 'grey-7',
                    age: 17,
                },
                {
                    name: 'Carlos Hernandez',
                    household: "",
                    avatar: 'avatars/student5.jpg',
                    originCountry: 'co',
                    status: 'Awaiting Placement',
                    statusColor: 'grey-7',
                    age: 20,
                },
                {
                    name: 'Jennifer Grey',
                    household: "",
                    avatar: 'avatars/student1.jpg',
                    originCountry: 'us',
                    status: 'Awaiting Placement',
                    statusColor: 'grey-7',
                    age: 23,
                },
                {
                    name: 'Harry Bao',
                    household: "",
                    avatar: 'avatars/student3.jpg',
                    originCountry: 'ph',
                    status: 'Awaiting Placement',
                    statusColor: 'grey-7',
                    age: 22,
                },
                {
                    name: "Walter Barros Galvão Neto",
                    household: "Leonardo's Family",
                    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu8_T25h9p7SA5aEJBdWNbQnGWgscqDVUPhiLv9m=s83-c-mo',
                    originCountry: 'br',
                    city: 'Vancouver',
                    status: 'Allocated',
                    statusColor: 'light-green',
                    age: 25,
                },
            ]
        })
    }
</script>
