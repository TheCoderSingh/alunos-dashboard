<template>
    <centered-content>
        <page-title subtitle="Manage system access">
            Admins
        </page-title>


        <div class="row q-col-gutter-lg">
            <div class="col col-12 cold-sm-6 col-md-4 col-lg-3">
                <admin-card
                    role="Owner"
                    name="Walter Galvão"
                    avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8_T25h9p7SA5aEJBdWNbQnGWgscqDVUPhiLv9m=s83-c-mo"
                    email="admin@langara.ca"
                    :to="{ name: 'alunos'}"
                />
            </div>
            <div class="col col-12 cold-sm-6 col-md-4 col-lg-3">
                <admin-card
                    role="Homestay Coordinator"
                    name="Karen Filipelli"
                    email="karen@langara.ca"
                    avatar="https://i.redd.it/sgirqwcx58i01.jpg"
                    :to="{ name: 'alunos'}"
                />
            </div>
        </div>
    </centered-content>
</template>

<script>
    import PageTitle from "../../components/dumb/PageTitle";
    import CenteredContent from "../../components/dumb/CenteredContent";
    import AdminCard from "../../components/dumb/AdminCard";
    export default {
        name: 'StudentList',
        components: {AdminCard, CenteredContent, PageTitle},
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
                },
            ]
        })
    }
</script>
