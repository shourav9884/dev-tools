<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">Hex/RGB Converter</label>
            <Textarea id="message" class="w-full" rows="1" v-model="input" placeholder="Enter Enter hex color (#RRGGBB) or RGB (rgb(0, 0, 0))"/>
        </div>
        <div class="text-right">
            <Button @click="convertToRgb" label="Hex to RGB" class="mx-2"/>
            <Button @click="rgbStringToHex" label="RGB to Hex"/>
        </div>
        <div>
            <ContainerWithCopy :outputText="output" height="h-20"/>
            <div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      output: ''
    };
  },
  methods: {
    convertToRgb() {
      let hex = this.input.replace('#', '');
      if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
      }
      if (hex.length !== 6) {
        this.output = 'Invalid hex';
        return;
      }
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      this.output = `rgb(${r}, ${g}, ${b})`;
    },
    rgbStringToHex() {
        // Extract the numeric values using a regular expression
        const rgbValues = this.input.match(/\d+/g).map(Number);

        const toHex = (n) => {
            const hex = n.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        const [r, g, b] = rgbValues;

        this.output = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
</style>
