<template>
  <div class="about mx-5 pt-5">
    <h2 class="text-2xl font-bold flex items-center justify-between">
      <button @click="router.go(-1)" class="text-blue-500">Назад</button>
      <router-link
        :to="{ name: 'edit-contacts', params: { id: id } }"
        class="text-green-500 px-3"
        title="Добавить новый контакт"
      >
        Изменить
      </router-link>
    </h2>

    <div class="mt-5">
      <div
        class="w-1/3 aspect-square bg-slate-600 rounded-full flex items-center justify-center text-8xl font-bold text-slate-100 mx-auto"
      >
        {{ contactInfo.initial }}
      </div>
      <h1 class="text-3xl font-bold text-center mt-5 mb-12">
        {{ contactInfo.fullName }}
      </h1>

      <div class="grid grid-cols-4 gap-3 mb-4 text-sm">
        <a
          @click="callTo(contactInfo.id)"
          :href="`tel:${contactInfo.phone}`"
          class="border rounded-xl p-3 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          Позвонить
        </a>

        <div class="border rounded-xl p-3 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          Написать
        </div>

        <a
          :href="`mailto:${contactInfo.email}`"
          class="border rounded-xl p-3 flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          Почта
        </a>

        <div
          @click="toggleFavorite(id)"
          class="border rounded-xl p-3 flex flex-col items-center cursor-pointer"
        >
          <svg
            v-if="contactInfo.favorite"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="yellow"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          Избранное
        </div>
      </div>

      <div
        @click="copy(contactInfo.phone)"
        title="Скопировать"
        class="h-16 w-full border rounded-lg px-4 py-2 cursor-pointer"
      >
        <div class="font-normal">Номер телефона</div>
        <div class="font-semibold">{{ contactInfo.phone }}</div>
      </div>

      <div
        @click="copy(contactInfo.email)"
        title="Скопировать"
        class="h-16 w-full border rounded-lg px-4 py-2 mt-3 cursor-pointer"
      >
        <div class="font-normal">Адрес эл. почты</div>
        <div class="font-semibold">{{ contactInfo.email }}</div>
      </div>

      <ul class="mt-10 text-xl font-medium">
        <div class="mb-4">Причастен к группе</div>
        <div class="flex">
          <li
            v-for="teg in contactInfo.tegs"
            :key="teg"
            class="font-normal text-base"
          >
            <label class="border px-3 py-1.5 rounded mr-3">
              {{ teg }}
            </label>
          </li>
        </div>
      </ul>

      <div class="mt-7 text-center">
        <button
          @click="deleteThisContact"
          class="border border-red-500 hover:text-white hover:bg-red-500 px-10 py-3 rounded-lg text-red-500 transition-all font-medium"
        >
          Удалить контакт
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { useContactStore } from "@/stores/contact";
import ContactForm from "@/components/ContactForm.vue";

const router = useRouter();
const route = useRoute();
const { contactById, deleteContact, toggleFavorite, callTo } =
  useContactStore();

const id = Number(route.params.id);
const contactInfo = contactById(id);

const deleteThisContact = () => {
  if (confirm("Вы действительно хотите удалить контакт?")) {
    deleteContact(id);
    router.push({ name: "contacts" });
  }
};

const copy = (text) => {
  navigator.clipboard.writeText(text);
};
</script>
<style lang="scss" scoped></style>
