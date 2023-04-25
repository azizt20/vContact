<script setup lang="ts"></script>

<template>
  <section class="app">
    <section class="content">
      <router-view />
    </section>

    <nav class="navigation">
      <router-link class="navigation__link" to="/favorites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
        Избранное
      </router-link>
      <router-link class="navigation__link" to="/">
        <div class="w-8 h-9 grid grid-cols-3 gap-0.5 pb-1">
          <div v-for="i in 9" :key="i" class="bg-black rounded-full"></div>
        </div>
        Набор
      </router-link>
      <router-link class="navigation__link" to="/recent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clip-rule="evenodd"
          />
        </svg>
        Недавние
      </router-link>
      <router-link class="navigation__link" to="/contacts">
        <div class="w-9 h-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-9 h-9"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        Контакты
      </router-link>
    </nav>
  </section>
</template>
<style lang="scss" scoped>
.app {
  @apply h-[98%] w-full shadow-2xl relative m-auto pb-[100px] border border-black rounded-xl;
}
.content {
  @apply shadow-lg h-full overflow-hidden ;
}
.navigation {
  @apply w-full h-[100px] grid grid-cols-4 absolute bottom-0 left-0  items-center justify-center;

  &__link {
    @apply flex flex-col justify-center items-center;
  }
}
</style>
