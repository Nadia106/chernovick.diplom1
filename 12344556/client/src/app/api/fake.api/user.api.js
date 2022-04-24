const users = [
  {
    _id: "33jgd456nn87ld152201",
    name: "Джон Дориан",
    email: "Jony7351@tw.com",
    phoneNumber: "89094567122",
    sex: "male",
    goodsInBasket: false,
    favourite: false
  },
  {
    _id: "33jgd456nn87ld152202",
    name: "Кокс",
    email: "white4571@twipet.com",
    phoneNumber: "89094567123",
    sex: "male",
    goodsInBasket: false,
    favourite: false
  }
];
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((u) => u._id === id);
    users[userIndex] = { ...users[userIndex], ...data };
    localStorage.setItem("users", JSON.stringify(users));
    resolve(users[userIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).find(
          (user) => user._id === id
        )
      );
    }, 1000);
  });
export default {
  fetchAll,
  getById,
  update
};
