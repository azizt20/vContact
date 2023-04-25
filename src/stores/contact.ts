import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
const route = useRoute();

export const useContactStore = defineStore("contact", () => {
  const contacts: any = ref([
    {
      id: 1,
      fullName: "Тохиров Азизжон",
      phone: "+998944099907",
      email: "aziiz0120@gmail.com",
      tegs: ["work", "friends"],
      favorite: true,
      initial: "Т",
    },
    {
      id: 2,
      fullName: "Анастасия IT-Recruiter🕵🏻‍♀️💻",
      phone: "+998 95 115 76 24",
      email: "ax_recruiter@gmail.com",
      tegs: ["work"],
      favorite: true,
      initial: "А",
    },
    {
      id: 3,
      fullName: "Мухаммадалихон Али",
      phone: "+998 99 504 70 24",
      email: "idontknow@gmail.com",
      tegs: ["work", "friends"],
      favorite: false,
      initial: "М",
    },
  ]);

  const contactsStorage = localStorage.getItem("contacts");
  if (contactsStorage) {
    contacts.value = JSON.parse(contactsStorage);
  }

  const contactById = computed(
    () => (id: number) =>
      contacts.value.find((el: { id: number }) => el.id === id)
  );

  const addNewContact = (contact: { id: number }) => {
    contacts.value.push({ ...contact, id: Date.now(), favorite: false });
    localStorage.setItem("contacts", JSON.stringify(contacts.value));
  };

  const editContact = (contact: { id: number }) => {
    const index = contacts.value.findIndex(
      (c: { id: number }) => c.id === contact.id
    );
    contacts.value[index] = contact;
    localStorage.setItem("contacts", JSON.stringify(contacts.value));
  };

  const deleteContact = (id: number) => {
    contacts.value = contacts.value.filter(
      (el: { id: number }) => el.id !== id
    );
    localStorage.setItem("contacts", JSON.stringify(contacts.value));
  };

  const favoriteContacts = computed(() =>
    contacts.value.filter((el: { favorite: boolean }) => el.favorite === true)
  );

  const toggleFavorite = (id: number) => {
    const index = contacts.value.findIndex((c: { id: number }) => c.id === id);
    contacts.value[index]["favorite"] = !contacts.value[index]["favorite"];
    localStorage.setItem("contacts", JSON.stringify(contacts.value));
  };

  const tegs = ref(["work", "friends", "something", "something2"]);

  const addNewTeg = (teg: string) => {
    tegs.value.includes(teg) || tegs.value.push(teg);
  };

  const recents: any = ref([]);
  const recentsStorage = localStorage.getItem("recents");
  if (recentsStorage) {
    recents.value = JSON.parse(recentsStorage);
  }

  const callTo = (contactId: number) => {
    if (
      recents.value.length &&
      recents.value[recents.value.length - 1]["id"] === contactId
    ) {
      recents.value[recents.value.length - 1]["callIds"].push(Date.now());
    } else {
      const { id, fullName, phone, initial } = contacts.value.find(
        (c: { id: number }) => c.id === contactId
      );
      recents.value.push({
        id,
        fullName,
        phone,
        initial,
        callIds: [Date.now()],
      });
    }
    localStorage.setItem("recents", JSON.stringify(recents.value));
  };

  return {
    contacts,
    contactById,
    addNewContact,
    editContact,
    deleteContact,
    favoriteContacts,
    toggleFavorite,
    tegs,
    addNewTeg,
    recents,
    callTo,
  };
});
