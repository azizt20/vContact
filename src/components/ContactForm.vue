<template>
  <form @submit.prevent="submitForm">
    <div class="">
      <div
        class="w-1/3 aspect-square bg-slate-600 rounded-full flex items-center justify-center text-8xl font-bold text-slate-100 mx-auto mb-12"
      >
        {{ initial }}
      </div>

      <input
        type="text"
        name="fullName"
        v-model.trim="newContact.fullName"
        :class="[
          'border border-black border-opacity-50 w-full h-10 mt-2 rounded-lg outline-none px-5',
          { 'border-red-500': error.nameError },
        ]"
        placeholder="Введите Ф.И.О."
      />
      <span class="text-red-500 font-medium text-xs">{{
        error.nameError
      }}</span>

      <input
        type="email"
        name="email"
        v-model="newContact.email"
        :class="[
          'border border-black border-opacity-50 w-full h-10 mt-2 rounded-lg outline-none px-5',
          { 'border-red-500': error.emailError },
        ]"
        placeholder="Введите адрес эл. почты"
      />
      <span class="text-red-500 font-medium text-xs">{{
        error.emailError
      }}</span>

      <input
        type="tel"
        name="phone"
        v-model="newContact.phone"
        :class="[
          'border border-black border-opacity-50 w-full h-10 mt-2 rounded-lg outline-none px-5',
          { 'border-red-500': error.phoneError },
        ]"
        placeholder="Введите номер телефона"
      />
      <span class="text-red-500 font-medium text-xs">{{
        error.phoneError
      }}</span>

      <ul class="mt-10 text-xl font-medium">
        <div class="mb-3">Добавить к группе</div>
        <li v-for="teg in tegs" :key="teg" class="font-normal text-base">
          <label>
            <input
              type="checkbox"
              name=""
              id=""
              v-model="newContact.tegs"
              :value="teg"
            />
            {{ teg }}
          </label>
        </li>
      </ul>
      <button class="hidden" type="submit">submit</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from "vue";
import { useContactStore } from "@/stores/contact";
import { useValidation } from "@/composables/validation.ts";
const { tegs } = useContactStore();

const props = defineProps({ submit: Boolean, contact: Object });
const emit = defineEmits(["submitForm"]);

const newContact = ref({
  fullName: "",
  phone: "",
  email: "",
  tegs: [],
});

props.contact ? (newContact.value = props.contact) : "";

const initial = computed(
  () => newContact.value.fullName[0]?.toUpperCase() || ""
);

watch(
  () => props.submit,
  () => submitForm()
);
const error = ref({});

const submitForm = () => {
  error.value = useValidation(
    newContact.value.fullName,
    newContact.value.email,
    newContact.value.phone
  );
  if (
    error.value.nameError ||
    error.value.phoneError ||
    error.value.emailError
  ) {
    alert("yooo mayo");
  } else {
    emit("submitForm", { ...newContact.value, initial: initial.value });
    newContact.value = {
      fullName: "",
      phone: "",
      email: "",
      tegs: [],
    };
  }
};
</script>
<style lang="scss" scoped></style>
