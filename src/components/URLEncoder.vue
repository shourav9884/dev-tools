<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">URL Encoder/Decoder</label>
            <Textarea id="message" class="w-full" rows="4" v-model="inputText"/>
        </div>
        <div class="text-right">
            <Button @click="encodeUrl" label="Encode" class="mx-2"/>
            <Button @click="decodeUrl" label="Decode"/>
        </div>
        <div>
            <ContainerWithCopy :outputText="outputText"/>
            <div>

            </div>

        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      inputText: '',
      outputText: '',
      copySuccess: false
    };
  },
  methods: {
    encodeUrl() {
      this.outputText = encodeURIComponent(this.inputText);
    },
    decodeUrl() {
      this.outputText = decodeURIComponent(this.inputText);
    },
  }
};
</script>

