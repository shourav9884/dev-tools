<template>
    <div class="container px-2">
        <div class="flex-auto">
            <label for="message" class="block font-semibold mb-2">JSON Formatter</label>
            <Textarea id="message" class="w-full" rows="4" v-model="rawJson"/>
        </div>
        <div class="text-right">
            <Button @click="formatJson" class="mx-2">Format JSON</Button>
        </div>
        <div>
            <h3>Result:</h3>
            <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-64">
                <div class="overflow-scroll max-h-full">
                    <pre v-if="formattedJson"><code>{{ formattedJson }}</code></pre>
                </div>
                <div class="absolute top-2 end-2 bg-gray-50 dark:bg-gray-700">
                    <button @click="copyText"
                            class="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            <span v-if="!copySuccess" id="default-message" class="inline-flex items-center">
                <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 18 20">
                    <path
                        d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
                <span class="text-xs font-semibold">Copy code</span>
            </span>
                        <span v-if="copySuccess" class="inline-flex items-center">
                <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
            </span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rawJson: '',
      formattedJson: '',
      copySuccess: false
    };
  },
  methods: {
    formatJson() {
      try {
        this.formattedJson = JSON.stringify(JSON.parse(this.rawJson), null, 2);
      } catch (e) {
        this.formattedJson = "Invalid JSON";
      }
    },
    copyText() {
      // Create a temporary input element to copy text from
      const textarea = document.createElement('textarea');
      textarea.value = this.formattedJson;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      // Show success message
      this.copySuccess = true;

      // Remove success message after a delay
      setTimeout(() => {
          this.copySuccess = false;
      }, 2000);
    }
  }
};
</script>

