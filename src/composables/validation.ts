import { ref } from "vue";

export function useValidation(name: string, email: string, phone: string) {
  const regex = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/,
    phone:
      /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
  };
  let nameError: string = "";
  let phoneError: string = "";
  let emailError: string = "";

  if (!email) {
    emailError = "Заполните поле";
  } else if (!regex.email.test(email)) {
    emailError = "Вы ввели не верный формат эл. почты";
  }

  if (!phone) {
    phoneError = "Заполните поле";
  } else if (!regex.phone.test(phone)) {
    phoneError = "Вы ввели не верный формат номера телефона";
  }

  if (!name) {
    nameError = "Заполните поле";
  }

  return { emailError, phoneError, nameError };
}
