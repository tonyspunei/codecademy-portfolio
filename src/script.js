const timeContainerEl = document.querySelector("#time-container");
const startedCoding = "06-01-2012";
const startedCoding_DATE = new Date(startedCoding);
const intlNumberFormat = new Intl.NumberFormat("en-US");

setInterval((_) => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - startedCoding_DATE.getTime()) / 1000
  );
  timeContainerEl.innerText = intlNumberFormat.format(difference);
}, 1000);
