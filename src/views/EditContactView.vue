<template>
  <div class="about mx-5 pt-5">
    <h2 class="text-2xl font-bold flex items-center justify-between">
      <button @click="router.go(-1)" class="text-blue-500">Отменить</button>
      <button
        @click="submitForm = true"
        class="text-green-500 px-3"
        title="Добавить новый контакт"
      >
        Готово
      </button>
    </h2>
    <h1 class="text-4xl font-bold text-center mt-5">Изменить контакт</h1>

    <ContactForm
      class="mt-10"
      @submit-form="editThisContact"
      v-model:submit="submitForm"
      :contact="contactById(id)"
    />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useContactStore } from "@/stores/contact";
import ContactForm from "@/components/ContactForm.vue";

const router = useRouter();
const route = useRoute();
const { editContact, contactById } = useContactStore();

const submitForm = ref(false);
const id = Number(route.params.id);

const editThisContact = (newContact) => {
  editContact(newContact);
  router.go(-1);
};
</script>
<style lang="scss" scoped></style>
