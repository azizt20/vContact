<template>
  <div class="about mx-5 pt-5">
    <h2 class="text-2xl font-bold flex items-center justify-between">
      <router-link to="/contacts" class="text-blue-500"> Отменить </router-link>
      <button
        @click="submitForm = true"
        class="text-green-500 px-3"
        title="Добавить новый контакт"
      >
        Готово
      </button>
    </h2>
    <h1 class="text-4xl font-bold text-center mt-5">Добавить контакт</h1>

    <ContactForm
      class="mt-10"
      @submit-form="addContact"
      v-model:submit="submitForm"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useContactStore } from "@/stores/contact";
import ContactForm from "@/components/ContactForm.vue";

const router = useRouter();
const { addNewContact } = useContactStore();

const submitForm = ref(false);

const addContact = (newContact) => {
  addNewContact(newContact);
  router.push({ name: "contacts" });
};
</script>
<style lang="scss" scoped></style>
