const datas = document.querySelectorAll(".controls input");
console.log(datas);
function handeupdate() {
  const suffix = this.dataset.sizing || "";
  console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
datas.forEach((data) => {
  data.addEventListener("change", handeupdate);
});
// datas.forEach((data) => {
//   data.addEventListener("mousemove", handeupdate);
// });
