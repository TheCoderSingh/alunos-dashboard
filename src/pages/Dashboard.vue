<template>
    <centered-content>
        <page-title subtitle="Daily statistics and tasks">
            Dashboard
        </page-title>

        <div class="row  q-gutter-lg">
            <div class="col">
                <indicator-card
                    icon="las la-bed"
                    icon-color="green-4"
                    color="green-1"
                    caption="Rooms Available"
                >
                    4
                </indicator-card>
            </div>
            <div class="col">
                <indicator-card
                    icon="las la-graduation-cap"
                    icon-color="blue-4"
                    color="blue-1"
                    caption="New Students"
                >
                    23
                </indicator-card>
            </div>
            <div class="col">
                <indicator-card
                    icon="las la-campground"
                    icon-color="brown-4"
                    color="brown-1"
                    caption="New Households"
                >
                    8
                </indicator-card>
            </div>
            <div class="col">
                <indicator-card
                    icon="las la-address-card"
                    icon-color="red-4"
                    color="red-1"
                    caption="Pending Applications"
                >
                    3
                </indicator-card>
            </div>
        </div>

    </centered-content>
</template>

<script>
    import CenteredContent from "../components/dumb/CenteredContent";
    import PageTitle from "../components/dumb/PageTitle";
    import IndicatorCard from "../components/dumb/IndicatorCard";

    export default {
        name: 'PageIndex',
        components: {IndicatorCard, PageTitle, CenteredContent},
        data() {
            return {
                columns: [
                    {
                        name: 'name',
                        required: true,
                        label: 'Dessert (100g serving)',
                        align: 'left',
                        field: row => row.name,
                        format: val => `${val}`,
                        sortable: true
                    },
                    {name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true},
                    {name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true},
                    {name: 'carbs', label: 'Carbs (g)', field: 'carbs'},
                    {name: 'protein', label: 'Protein (g)', field: 'protein'},
                    {name: 'sodium', label: 'Sodium (mg)', field: 'sodium'},
                    {
                        name: 'calcium',
                        label: 'Calcium (%)',
                        field: 'calcium',
                        sortable: true,
                        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
                    },
                    {
                        name: 'iron',
                        label: 'Iron (%)',
                        field: 'iron',
                        sortable: true,
                        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
                    }
                ],
                data: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        sodium: 87,
                        calcium: '14%',
                        iron: '1%'
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        sodium: 129,
                        calcium: '8%',
                        iron: '1%'
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        sodium: 337,
                        calcium: '6%',
                        iron: '7%'
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        sodium: 413,
                        calcium: '3%',
                        iron: '8%'
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        sodium: 327,
                        calcium: '7%',
                        iron: '16%'
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        sodium: 50,
                        calcium: '0%',
                        iron: '0%'
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        sodium: 38,
                        calcium: '0%',
                        iron: '2%'
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        sodium: 562,
                        calcium: '0%',
                        iron: '45%'
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        sodium: 326,
                        calcium: '2%',
                        iron: '22%'
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        sodium: 54,
                        calcium: '12%',
                        iron: '6%'
                    }
                ]
            }
        }
    }
</script>
