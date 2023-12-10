//your code here!

const scroll_div = document.getElementById("infi-list");
let count = 1;
for (; count <= 10; count++) {
  const div = document.createElement("li");
  div.innerText = `item ${count}`;
  div.className = "item";
  scroll_div.appendChild(div);
}

scroll_div.addEventListener("scroll", () => {
  let maxScrollableHeight = scroll_div.scrollHeight - scroll_div.clientHeight;
  let scrolledHeight = scroll_div.scrollTop;

  // user has only 5px down to reach the bottom
  if (maxScrollableHeight - scrolledHeight <= 5) {
    addTwoMoreItems();
  }
});

function addTwoMoreItems() {
  const div1 = document.createElement("li");
  div1.innerText = `item ${count++}`;
  div1.className = "item";

  const div2 = document.createElement("li");
  div2.innerText = `item ${count++}`;
  div2.className = "item";
  //   scroll_div.appendChild(div1);
  //   scroll_div.appendChild(div2);

  scroll_div.append(div1, div2);
}