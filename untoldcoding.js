const text =
  "Dear Wifey, Today, as we celebrate our journey together, I'm reminded of the countless moments you've stolen my heart. Your smile is the sunshine that brightens my day, your laughter the melody that fills my soul, and your touch the warmth that sets my world ablaze. With every passing year, our love has grown stronger, deeper, and more beautiful. You're the missing piece I never knew I needed, the safe haven where I can be myself, and the adventure that makes life worth living. Forever and always, my love, my partner, my best friend. Here's to many more laughter-filled days, tear-drenched nights, and moments of unspoken understanding. I love you more with each passing breath. Happy Anniversary, wifey jaana .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];
    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
