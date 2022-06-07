let info = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const parent = document.querySelector(".parent");
console.log(parent);
const amount = document.querySelectorAll(".amount-list");
const [...amountArr] = amount;
console.log(amountArr);
console.log(amount);
const figure = document.querySelectorAll(".figure-item");
console.log(figure);
const day = document.querySelectorAll(".day");
console.log(day);
const overall = document.querySelector(".overall");
console.log(overall);

figure.forEach((item, index) => {
  item.addEventListener("mouseover", function () {
    let sibling = item.previousElementSibling;
    info.forEach((money, current) => {
      if (index === current) {
        sibling.classList.remove("hidden");
        sibling.textContent = `$${money.amount}`;
      }
    });
  });
});

day.forEach((d, index) => {
  info.forEach((money, current) => {
    if (index === current) {
      d.textContent = money.day;
    }
  });
});

let result = info.reduce((previous, acc) => previous + acc.amount, 0);
overall.textContent = `$${result}`;
