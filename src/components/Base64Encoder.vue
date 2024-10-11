<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">Base64 Encoder/Decoder</label>
            <Textarea id="message" class="w-full" rows="4" v-model="inputText"/>
        </div>
        <div class="text-right">
            <Button @click="encodeBase64" class="mx-2">Encode</Button>
            <Button @click="decodeBase64">Decode</Button>
        </div>
        <ContainerWithCopy :outputText="outputText"/>
    </div>

</template>

<script>

import ContainerWithCopy from "@/components/ContainerWithCopy.vue";

export default {
    components: {ContainerWithCopy},
    data() {
        return {
            inputText: '',
            outputText: ''
        };
    },
    methods: {
        encodeBase64() {
            this.outputText = btoa(this.inputText);
        },
        decodeBase64() {
            try {
                this.outputText = atob(this.inputText);
            } catch (e) {
                this.outputText = "Invalid Base64 input";
            }
        },
    }
};
</script>

