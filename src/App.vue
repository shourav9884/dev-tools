<template>
    <div id="app">
        <div class="grid grid-cols-5 my-5 mx-auto">
            <div></div>
            <div><h1 class="text-2xl my-4">Dev tools</h1></div>
        </div>

        <div class="grid grid-cols-5 mx-auto">
            <div></div>
            <div>

                <Menu :model="items">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span :class="item.icon"/>
                                <span class="ml-2">{{ item.label }}</span>
                            </a>
                        </router-link>
                        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                            <span :class="item.icon"/>
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </template>
                </Menu>
            </div>
            <div class="col-span-2 px-4">
                <router-view></router-view>
            </div>
        </div>


    </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Base64 Encode/Decode',
        icon: 'pi pi-link',
        command: () => {
            router.push('/base64');
        }
    },
    {
        label: 'Md5',
        icon: 'pi pi-link',
        command: () => {
            router.push('/md5');
        }
    },
    {
        label: 'URL Encode/Decode',
        icon: 'pi pi-link',
        command: () => {
            router.push('/url');
        }
    },
    {
        label: 'JWT decoder',
        icon: 'pi pi-link',
        command: () => {
            router.push('/jwt-decoder');
        }
    },
    {
        label: 'Json Formatter',
        icon: 'pi pi-link',
        command: () => {
            router.push('/json-formatter');
        }
    },
    {
        label: 'SHA256',
        icon: 'pi pi-link',
        command: () => {
            router.push('/sha-256');
        }
    },
    {
        label: 'Hex to RGB',
        icon: 'pi pi-link',
        command: () => {
            router.push('/hex-to-rgb');
        }
    },
    {
        label: 'Timestamp converter',
        icon: 'pi pi-link',
        command: () => {
            router.push('/timestamp');
        }
    },
]);
</script>

