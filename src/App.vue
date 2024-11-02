<template>
    <div id="app">
        <div class="grid grid-cols-1 md:grid-cols-5 my-5 mx-auto">
            <div class="hidden md:block"></div>
            <div class="flex items-center justify-between px-4 md:px-0">
                <h1 class="text-2xl my-4">Dev tools</h1>
                <button @click="toggleSidebar" class="bg-gray-800 text-white p-2 rounded md:hidden">
                    Menu
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 mx-auto">
            <div class="hidden md:block"></div>
            <div>
                <Sidebar 
                    :breakpoint="960"
                    class="md:relative bg-gray-50 z-50"
                    :class="{
          'fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out': true,
                        'translate-x-0': isSidebarOpen,
                    }"
                >
                    <div v-for="item in items" :key="item.label" class="p-1">
                        <div 
                            class="flex items-center cursor-pointer p-1 rounded text-sm" 
                            :class="{
                                'bg-gray-100 border border-black': $route.path === item.path,
                                'hover:bg-gray-100 border border-transparent': $route.path !== item.path
                            }"
                            @click="item.command();"
                        >
                            <span :class="item.icon"/>
                            <span class="ml-1">{{ item.label }}</span>
                        </div>
                    </div>
                </Sidebar>
            </div>
            <div class="col-span-1 md:col-span-2 px-4">
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
        },
        path: '/base64'
    },
    {
        label: 'Md5',
        icon: 'pi pi-link',
        command: () => {
            router.push('/md5');
        },
        path: '/md5'
    },
    {
        label: 'URL Encode/Decode',
        icon: 'pi pi-link',
        command: () => {
            router.push('/url');
        },
        path: '/url'
    },
    {
        label: 'JWT decoder',
        icon: 'pi pi-link',
        command: () => {
            router.push('/jwt-decoder');
        },
        path: '/jwt-decoder'
    },
    {
        label: 'Json Formatter',
        icon: 'pi pi-link',
        command: () => {
            router.push('/json-formatter');
        },
        path: '/json-formatter'
    },
    {
        label: 'SHA256',
        icon: 'pi pi-link',
        command: () => {
            router.push('/sha-256');
        },
        path: '/sha-256'
    },
    {
        label: 'Hex to RGB',
        icon: 'pi pi-link',
        command: () => {
            router.push('/hex-to-rgb');
        },
        path: '/hex-to-rgb'
    },
    {
        label: 'Timestamp converter',
        icon: 'pi pi-link',
        command: () => {
            router.push('/timestamp');
        },
        path: '/timestamp'
    },
]);
const isSidebarOpen = ref(false);
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

