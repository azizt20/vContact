<template>
  <ul v-if="props.contactList.length" class="border-t pt-5">
    <transition-group name="list">
      <li v-for="(contact, i) in props.contactList" :key="i" class="">
        <router-link
          :to="{ name: 'contacts-detail', params: { id: contact.id } }"
        >
          <div class="px-4 py-4 mb-1 shadow flex">
            <div class="w-12 pr-2 flex items-center">
              <div
                class="bg-slate-500 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
              >
                {{ contact.initial }}
              </div>
            </div>
            <div class="w-full">
              <div class="font-medium grid grid-cols-5 items-center justify-between">
                <div class="name truncate col-span-3 pr-4">
                  {{ contact.fullName }}
                  <span v-if="contact?.callIds?.length > 1">
                    ({{ contact.callIds.length }})
                  </span>
                </div>
                <div class="email font-normal truncate text-sm col-span-2 text-end">
                  {{ contact.email }}
                </div>
              </div>
              <div class="text-sm flex items-center justify-between">
                <span class="phone">{{ contact.phone }}</span>
                <div v-if="contact.tegs" class="tegs text-xs">
                  <span v-for="(teg, i) in contact.tegs" :key="i" class="">
                    {{ teg }}
                    <span v-if="i + 1 !== contact.tegs.length" class="mx-0.5">
                      /
                    </span>
                  </span>
                </div>
                <span v-if="contact?.callIds?.length">
                  {{
                    normalizeDate(contact.callIds[contact.callIds.length - 1])
                  }}
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </transition-group>
  </ul>
  <div v-else class="text-2xl font-medium border-t pt-10 text-center">
    Список пуст
  </div>
</template>

<script setup>
const props = defineProps({ contactList: Array });
const normalizeDate = (date) => {
  const now = new Date(date);
  return (
    now.getDate() +
    "/" +
    now.getMonth() +
    "/" +
    now.getFullYear() +
    " - " +
    now.getHours() +
    ":" +
    now.getMinutes()
  );
};
</script>
<style lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
