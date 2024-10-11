<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">SHA256 Hash</label>
            <Textarea id="message" class="w-full" rows="2" v-model="input"/>
        </div>
        <div class="text-right">
            <Button @click="generateHash" class="mx-2">Generate</Button>
        </div>
        <ContainerWithCopy :outputText="hash" height="h-20"/>
    </div>
</template>

<script>
import CryptoJS from 'crypto-js';
import ContainerWithCopy from "@/components/ContainerWithCopy.vue";

export default {
    components: {ContainerWithCopy},
    data() {
        return {
            input: '',
            hash: ''
        };
    },
    methods: {
        generateHash() {
            this.hash = CryptoJS.SHA256(this.input).toString(CryptoJS.enc.Hex);
        }
    }
};
</script>
