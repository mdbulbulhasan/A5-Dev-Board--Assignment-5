// Route index.html to blogs.html
document
  .getElementById("discoverNew")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "blogs.html";
  });
// Route index.html to blogs.html
// Full document background color Change Feature
const rainbowColors = [
  "rgba(255,0,0,0.8)",
  "rgba(255,144,255,0.8)",
  "rgba(255,255,98,0.8)",
  "rgba(0,255,0,0.8)",
  "rgba(0,140,255,0.8)",
  "rgba(251,55,0,0.8)",
  "rgba(87,255,255,0.8)",
  "rgba(244,247,255,0.8)"
];
let colorIndex = 0;
document.getElementById("bg-change-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = rainbowColors[colorIndex];

  colorIndex = (colorIndex + 1) % rainbowColors.length;
});
// Full document background color Change Feature

function updatedDate() {
  let options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  let formattedDate = new Date().toLocaleDateString('en-us', options);
  formattedDate = formattedDate.replace(',', ',<br/>');
  document.getElementById('todayDate').innerHTML = formattedDate;
}
updatedDate();