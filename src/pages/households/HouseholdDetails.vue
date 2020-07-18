<template>
    <centered-content>
        <page-title>Leonardo's Family</page-title>
        <div class="row">
            <div class="col col-12">
                <q-carousel
                    animated
                    v-model="currentSlide"
                    thumbnails
                    infinite
                    height="300px"
                >
                    <q-carousel-slide :name="1" img-src="https://bridgedalehomebuyers.ca/wp-content/uploads/2019/04/Average-time-to-sell-a-house-in-Calgary.jpg" />
                    <q-carousel-slide :name="2" img-src="https://hgtvhome.sndimg.com/content/dam/images/door/fullset/2014/4/2/0/doory2014-1005-benedict-canyon-drive-beverly-hills-ca-living-room.jpg.rend.hgtvcom.966.644.suffix/1427751434340.jpeg" />
                    <q-carousel-slide :name="3" img-src="https://canadianimmigrant.ca/wp-content/uploads/iStock_000004901785Medium.jpg" />
                </q-carousel>
            </div>
        </div>

        <div class="row q-mt-lg q-col-gutter-x-lg">
            <div class="col-3">
                <q-list>
                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon color="icon" name="las la-stream" />
                        </q-item-section>

                        <q-item-section>Overview</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon color="icon" name="las la-bed" />
                        </q-item-section>

                        <q-item-section>Rooms</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon color="icon" name="las la-plane-arrival" />
                        </q-item-section>

                        <q-item-section>Airport pick-ups</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon color="icon" name="las la-binoculars" />
                        </q-item-section>

                        <q-item-section>Criminal checks</q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="col-9">
                <div class="row q-col-gutter-x-md">
                    <div class="col-6">
                        <div class="text-overline">Residents</div>
                        <q-card>
                            <q-card-section>
                            </q-card-section>
                        </q-card>
                    </div>
                    <div class="col-6">
                        <div class="text-overline">Upcoming Students</div>
                        <q-card>
                            <q-card-section>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </centered-content>
</template>

<script>
    import CenteredContent from "../../components/dumb/CenteredContent";
    import PageTitle from "../../components/dumb/PageTitle";

    export default {
        name: 'HouseholdDetails',
        components: {PageTitle, CenteredContent},
        data: () => ({
            currentSlide: 1
        }),
    }
</script>
