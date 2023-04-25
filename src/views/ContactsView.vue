<template>
  <div class="about overflow-y-auto h-full px-5 pt-5">
    <h1 class="text-4xl font-bold flex items-center justify-between">
      <span> Контакты </span>
      <router-link
        to="/addContact"
        class="text-blue-500 px-3"
        title="Добавить новый контакт"
      >
        +
      </router-link>
    </h1>

    <label for="" class="relative border-b pb-7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 absolute top-0 left-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        v-model="search"
        class="border border-black border-opacity-50 w-full h-10 mt-5 rounded-lg outline-none pl-10"
        placeholder="Поиск"
      />
    </label>

    <ContactList :contactList="filteredContacts" class="mt-10" />
  </div>
</template>

<script setup>
import ContactList from "@/components/ContactList.vue";
import { ref, computed } from "vue";
import { useContactStore } from "@/stores/contact";

const { contacts } = useContactStore();
const search = ref("");

const filteredContacts = computed(() => contacts.filter(filterFn));
const filterFn = (el, idx, array) => {
  return (
    el.fullName.toLowerCase().includes(search.value.toLowerCase()) ||
    el.email.toLowerCase().includes(search.value.toLowerCase()) ||
    el.phone.includes(search.value) ||
    el.tegs.includes(search.value)
  );
};
</script>
<style lang="scss" scoped></style>
