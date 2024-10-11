<template>
  <div class="container px-2">
    <div class="flex-auto">
      <label for="message" class="block font-semibold mb-2">JWT Decoder</label>
      <Textarea id="message" class="w-full" rows="4" v-model="jwt"/>
    </div>
    <div class="text-right">
      <Button @click="decodeJwt">Decode</Button>
    </div>
    <div>
        <ContainerWithCopy :outputText="decodedAlgo" title="Algorithm"/>
    </div>
    <div class="mt-3">
        <ContainerWithCopy :outputText="decodedPayload" title="Payload"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jwt: '',
      decodedPayload: '',
      decodedAlgo: ''
    };
  },
  methods: {
    decodeJwt() {
      try {
        const payload = this.jwt.split('.')[1];
        const decodedPayload = atob(payload);
        this.decodedPayload = JSON.stringify(JSON.parse(decodedPayload), null, 2);
      } catch (e) {
        this.decodedPayload = 'Invalid JWT';
      }

      try {
        const alg = this.jwt.split('.')[0];
        const decodedAlgo = atob(alg);
        this.decodedAlgo = JSON.stringify(JSON.parse(decodedAlgo), null, 2);
      } catch (e) {
        this.decodedAlgo = 'Invalid JWT';
      }
    }
  }
};
</script>
