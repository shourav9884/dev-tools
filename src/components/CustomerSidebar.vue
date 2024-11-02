<template>
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside
        :class="{
          'fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out': true,
          'translate-x-0': isSidebarOpen,
        }"
        class="bg-gray-800 text-white w-64 p-4 space-y-4 z-20 md:relative"
      >
        <h2 class="text-xl font-semibold">Dashboard</h2>
        <nav class="space-y-2">
          <a href="#" class="block py-2 px-3 rounded hover:bg-gray-700">Home</a>
          <a href="#" class="block py-2 px-3 rounded hover:bg-gray-700">Profile</a>
          <a href="#" class="block py-2 px-3 rounded hover:bg-gray-700">Settings</a>
          <a href="#" class="block py-2 px-3 rounded hover:bg-gray-700">Logout</a>
        </nav>
      </aside>
  
      <!-- Overlay for mobile -->
      <div
        v-if="isSidebarOpen"
        @click="toggleSidebar"
        class="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
      ></div>
  
      <!-- Main Content -->
      <main class="flex-1 bg-gray-100 p-6">
        <div class="md:hidden">
          <!-- Mobile Menu Button -->
          <button @click="toggleSidebar" class="bg-gray-800 text-white p-2 rounded">
            Menu
          </button>
        </div>
        <h1 class="text-2xl font-bold">Main Content</h1>
        <p class="mt-4">Your content goes here...</p>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSidebarOpen: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ensure sidebar covers the full height when open */
  aside {
    width: 16rem;
  }
  </style>
  