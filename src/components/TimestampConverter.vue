<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">Hex/RGB Converter</label>
            <Textarea id="message" class="w-full" rows="1" v-model="timestamp" placeholder="Enter timestamp"/>
        </div>
        <div class="text-right">
            <Button @click="convertToReadableDate" label="Convert to Date" />
        </div>
        <div>
            <ContainerWithCopy :outputText="readableDate" height="h-20"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timestamp: '',
            readableDate: ''
        };
    },
    methods: {
        convertToReadableDate() {
            const date = new Date(parseInt(this.timestamp) * 1000);
            this.readableDate = date.toLocaleString();
        }
    }
};
</script>

