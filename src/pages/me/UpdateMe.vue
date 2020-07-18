<template>
    <centered-content>
        <page-title subtitle="Your profile">
            Walter
        </page-title>

        <div class="text-center">
            <user-avatar
                class="shadow-6"
                :name="user.display_name"
                :image="user.avatar ? user.avatar.url : null"
            />
        </div>
        <q-card class="q-mt-md">
            <q-form @submit="handleSubmit">
                <q-card-section class="text-center">
                    <div class="q-mt-md">
                        <div class="row">
                            <div class="q-mx-auto" style="width: 150px;">
                                <q-file borderless v-model="form.avatar" @input="changeAvatar" label="Change avatar">
                                    <template v-slot:prepend>
                                        <q-icon name="attach_file" />
                                    </template>
                                </q-file>
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <q-card-section>

                    <div class="row q-col-gutter-lg">
                        <div class="col-6">
                            <q-input outlined v-model="form.email" disable label="Email" />
                        </div>
                        <div class="col-6">
                            <q-input outlined v-model="form.display_name" label="Display Name" />
                        </div>
                        <div class="col-6">
                            <q-input outlined v-model="form.first_name" label="First Name" />
                        </div>
                        <div class="col-6">
                            <q-input outlined v-model="form.last_name" label="Last Name" />
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions>
                    <q-space></q-space>
                    <q-btn type="submit" color="primary" unelevated>Save</q-btn>
                </q-card-actions>
            </q-form>
        </q-card>
    </centered-content>
</template>

<script>
    import PageTitle from "../../components/dumb/PageTitle";
    import CenteredContent from "../../components/dumb/CenteredContent";
    import {mapActions, mapGetters} from "vuex";
    import {UPDATE_ME_ACTION} from "../../constants";
    import UserAvatar from "../../components/UserAvatar";

    export default {
        name: 'StudentList',
        components: {UserAvatar, CenteredContent, PageTitle},
        data: () => ({
            form: {
                avatar: null,
                first_name: null,
                last_name: null,
                display_name: null
            }
        }),
        created() {
            console.log(this.user);
          this.form = {
              ...this.user
          };
        },
        methods: {
            ...mapActions({
                update: UPDATE_ME_ACTION
            }),
            changeAvatar(file) {
                this.avatar = file;
            },
            handleSubmit() {
                this.update(this.form);
            }
        },
        computed: {
            ...mapGetters({
                user: 'getCurrentUser',
            }),
        },
    }
</script>
