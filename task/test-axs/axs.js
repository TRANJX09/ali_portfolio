import axios from "axios";

axios
  .post("https://jsonplaceholder.typicode.com/users", {
    username: "Ali",
    password: "12345",
  })
  .then((response) => {
    console.log("Успешный вход:", response.data);
  })
  .catch((error) => {
    console.log("Ошибка входа:", error);
  });
