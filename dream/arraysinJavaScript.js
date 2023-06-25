// const nameList = ["ishay"];

// nameList.push("Liran");

// console.log("added liran", nameList);
// nameList.pop();
// console.log("popped", nameList);

// nameList.push(13);

// console.log("insert number", nameList);
// console.log("TYPE OF 13 - ", typeof nameList?.[1]);

// nameList.push(
//   ...[
//     null,
//     {
//       name: "David",
//       account: "Hagivaa",
//       token: "T)T#*YT@I#HTLREHLKHPIHYEWRGTHLKRTGNP@",
//     },
//   ]
// );

// console.log("pushed array", nameList);

// console.log("Last item in array", nameList.at(-1));

const users = [
  {
    name: "David",
    account: "Hagivaa",
    token: "T)T#*YT@I#HTLREHLKHPIHYEWRGTHLKRTGNP@",
  },
  {
    name: "Kevin",
    account: "Deushce",
    token: "T)T#*YT@I#HTLREHLKHPIHYEWRGTHLKRTGNP@",
  },
  {
    name: "Annie",
    account: "Sasportas Inc.",
    token: "T)T#*YT@I#HTLREHLKHPIHYEWRGTHLKRTGNP@",
  },
  {
    name: "Shmil",
    account: "Shawarma",
    token: "T)T#*YT@I#HTLREHLKHPIHYEWRGTHLKRTGNP@",
  },
];

for (let i = 0; i < users.length; i++) {
  //   console.log(users[i]);
}

function print(user) {
  console.log(user?.name);
}
const alsoPrints = (user) => {
  console.log(user?.name);
};

// users.forEach(print);
// users.forEach((user) => console.log(user?.name));

// users.forEach(({ name }) => console.log(name));
// users.map(({ name }) => console.log(name));

const updatedUsers = users.map((user) => {
  return { ...user, app: "SHIVILISHIVILITOV" };
});

// const filteredUsers = users?.filter((user) => user.name.includes("S"));
const filteredUsers = users?.filter((user) => user.name);

console.log("FILTERED USERS", filteredUsers);

const usersQuery = users?.find((user) => user.name);

console.log("FIND RESULTS", usersQuery);

console.log(
  "PREETY CAT",
  users?.[users.indexOf(users.find(({ name }) => name === "David"))]
);

const accountByUser = users.reduce((acc, user) => {
  acc[user.name] = user.account;
  return acc;
}, {});

console.log("accountByUser", accountByUser);

if (users?.length > 0) {
}
