<template>
  <div class="about overflow-y-auto h-full px-5 pt-5">
    <h1 class="text-4xl font-bold flex items-center justify-between">
      <span> Избранное </span>
    </h1>

    <ContactList :contactList="favoriteContacts" class="mt-10" />
  </div>
</template>

<script setup>
import ContactList from "@/components/ContactList.vue";
import { ref } from "vue";
import { useContactStore } from "@/stores/contact";

const search = ref("");
const { favoriteContacts } = useContactStore();
</script>
<style lang="scss" scoped></style>
