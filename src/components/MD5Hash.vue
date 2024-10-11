<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">Md5 Hash Generator</label>
            <Textarea id="message" class="w-full" rows="4" v-model="inputText"/>
        </div>
        <div class="text-right">
            <Button @click="generateHash" label="Generate MD5 Hash"/>
        </div>
        <div>
            <ContainerWithCopy :outputText="outputText"/>

            <div>

            </div>

        </div>
    </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
    data() {
        return {
            inputText: '',
            outputText: '',
            copySuccess: false
        };
    },
    methods: {
        generateHash() {
            this.outputText = CryptoJS.MD5(this.inputText).toString();
        }
    }
};
</script>

