<template>
    <centered-content>
        <page-title>
            Match
        </page-title>

        <q-card v-if="student === null">
            <q-card-section>
                <q-select
                        outlined
                        @input="chooseStudent"
                        option-value="name"
                        option-label="name"
                        :options="options"
                        v-model="selectedStudent"
                        label="Choose student"
                        use-input
                        @filter="filter">
                    <template v-slot:option="scope">
                        <q-item
                            v-bind="scope.itemProps"
                            v-on="scope.itemEvents"
                        >
                            <q-item-section avatar>
                                <q-avatar>
                                    <q-img :src="scope.opt.avatar"></q-img>
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label v-html="scope.opt.name"/>
                                <q-item-label caption>{{ scope.opt.description }}</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <flag :country="scope.opt.country"></flag>
                            </q-item-section>
                        </q-item>
                    </template>

                </q-select>
            </q-card-section>
        </q-card>

        <q-card v-if="student && isLoading">
            <q-card-section class="text-center">
                <img :src="require('../../assets/images/' + loading.image)" width="128">
                <h5 class="text-h5 text-weight-bold q-my-md text-grey-10">{{ loading.description }}</h5>
                <q-linear-progress size="4px" :value="loading.progress" indeterminate color="primary" ></q-linear-progress>
            </q-card-section>
        </q-card>

        <template v-if="student && !isLoading">
            <div v-for="match in matches" :key="match.name" class="family">
                    <div class="row items-center">
                        <div class="col col-auto q-mr-md">
                            <div class="text-center">
                                <q-circular-progress
                                    show-value
                                    :value="match.percentage"
                                    size="134px"
                                    :track-color="getColor(match.percentage) + '-2'"
                                    :color="getColor(match.percentage)"
                                >
                                    <q-avatar color="grey-3" size="124px">
                                        <img :src="match.avatar">
                                    </q-avatar>
                                </q-circular-progress>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                                <h5 class="text-h5 q-ma-none">
                                    {{ match.name }}
                                    <q-chip size="md" :color="getColor(match.percentage)" outline text-color="white" class="text-weight-medium">
                                        {{ match.percentage }}% compatible
                                    </q-chip>
                                </h5>

                                <q-icon name="las la-map-marker"></q-icon>
                                {{ match.address }}
                                <div class="q-mt-sm">
                                    <q-chip size="md" color="grey-3" icon="las la-check-circle" v-for="trait in match.traits" :key="trait">
                                        {{ trait }}
                                    </q-chip>
                                </div>
                            </div>
                        </div>
                        <q-space></q-space>
                        <div class="col col-auto text-center">
                            <div class="text-subtitle2">
                                {{ match.rooms }} {{ match.rooms > 1 ? 'rooms' : 'room' }} available
                            </div>
                            <q-btn color="primary" unelevated rounded>Request</q-btn>
                        </div>
                    </div>
            </div>
        </template>
    </centered-content>
</template>
<script>
    import CenteredContent from "../../components/dumb/CenteredContent";
    import PageTitle from "../../components/dumb/PageTitle";
    import Flag from "../../components/Flag";

    export default {
        components: {Flag, PageTitle, CenteredContent},
        data: () => ({
            model: null,
            search: null,
            student: null,
            selectedStudent: null,
            isLoading: false,
            currentLoadingPhase: 0,
            loadingPhases: [
                {
                    progress: 0,
                    image: 'bedroom.png',
                    description: 'Searching rooms available...',
                },
                {
                    progress: 0.25,
                    image: 'chilli.png',
                    description: 'Calculating food preferences...',
                },
                {
                    progress: 0.50,
                    image: 'translator.png',
                    description: 'Filtering same-language speakers...',
                },
                {
                    progress: 0.75,
                    image: 'location.png',
                    description: 'Prioritizing nearby school...',
                },
            ],
            options: [
                {
                    name: 'Antonella Ferraro',
                    description: "Awaiting placement",
                    avatar: 'avatars/student4.jpg',
                    country: 'it',
                },
                {
                    name: 'Carlos Hernandez',
                    description: "Awaiting placement",
                    avatar: 'avatars/student5.jpg',
                    country: 'co',
                },
                {
                    name: 'Jennifer Grey',
                    description: "Awaiting placement",
                    avatar: 'avatars/student1.jpg',
                    country: 'us',
                },
                {
                    name: 'Harry Bao',
                    description: "Awaiting placement",
                    avatar: 'avatars/student3.jpg',
                    country: 'ph',
                },
                {
                    name: 'Walter Barros Galvão Neto',
                    description: "Leonardo's Family",
                    avatar: 'avatars/student7.jpg',
                    country: 'br',
                },
            ],
            matches: [
                {
                    avatar: 'https://alunos-production.s3.us-west-2.amazonaws.com/uploads/family1.jpg%3Fv%3D1595834697.4623',
                    name: "Leonardo's",
                    address: '3628 Glen Drive, Vancouver',
                    percentage: 95,
                    traits: [
                        'Close to school',
                        'Very similar diet',
                        'No pets',
                    ],
                    rooms: 1,
                },
                {
                    avatar: 'https://alunos-production.s3.us-west-2.amazonaws.com/uploads/family6.jpg%3Fv%3D1595834813.3127',
                    name: "Kaur's",
                    address: '1160 Haro Street, Vancouver',
                    percentage: 85,
                    traits: [
                        'No pets',
                        'No children',
                        'Very similar diet',
                    ],
                    rooms: 2,
                },
                {
                    avatar: 'https://alunos-production.s3.us-west-2.amazonaws.com/uploads/family3.jpg%3Fv%3D1595834783.2333',
                    name: "Green's",
                    address: '4198 Youkon Street, Vancouver',
                    percentage: 76,
                    traits: [
                        'No pets',
                        'No children',
                    ],
                    rooms: 1,
                },
                {
                    avatar: 'https://alunos-production.s3.us-west-2.amazonaws.com/uploads/family7.jpg%3Fv%3D1595834751.961',
                    name: "Morrisom's",
                    address: '3216 Sanders Street, Burnaby',
                    percentage: 68,
                    traits: [],
                    rooms: 1,
                },
                {
                    avatar: 'https://alunos-production.s3.us-west-2.amazonaws.com/uploads/family2.jpg%3Fv%3D1595834723.9357',
                    name: "Brown's",
                    address: '4131 Bryson Bay, Richmond',
                    percentage: 45,
                    traits: [],
                    rooms: 3,
                },
            ]
        }),
        methods: {
            filter (value, update, abort) {
                update(() => {
                    console.log(value, this.options.filter(student => student.name === value));
                    return this.options.filter(student => student.name === value);
                })
            },
            chooseStudent(student) {
                this.student = student;
                this.isLoading = true;
                this.startLoading();
            },
            startLoading() {
                setTimeout(() => {
                    this.currentLoadingPhase = this.currentLoadingPhase + 1;

                    if (this.currentLoadingPhase > this.loadingPhases.length) {
                        this.isLoading = false;
                        return;
                    }

                    this.startLoading();
                }, 1500);
            },
            getColor(percentage) {
                if (parseInt(percentage) > 75) {
                    return 'light-green';
                }

                return 'orange';
            }
        },
        computed: {
            loading() {
                return this.loadingPhases[this.currentLoadingPhase];
            }
        }
    }
</script>

<style lang="scss">
    .family {
        border-radius: 150px;
        padding: 12px 40px 12px 12px;
        margin-bottom: 24px;
        background: #fff;
        border: 1px solid #ddd;
    }
</style>
