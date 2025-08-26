// Counter
let heartCounter = parseInt(document.getElementById("heart-count").innerText);
let coinCounter = parseInt(document.getElementById("coin-count").innerText);
let copyCounter = parseInt(document.getElementById("copy-count").innerText);

let callHistoryArr = [];

// Functions
document
  .getElementById("card-container")
  .addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    // Call Btn
    if (event.target.innerText === "Call") {
      const title = card.querySelector("h2").innerText;
      const contact = card.querySelector("p").innerText;
      const number = card.querySelector("h3").innerText;
      if (coinCounter >= 20) {
        alert(`Calling ${contact} ${number}...`);
        coinCounter-=20;
        document.getElementById("coin-count").innerText = coinCounter;

        const date = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex justify-between bg-[#FAFAFA] p-[16px] rounded-xl">
            <div>
              <div class="inter-semibold text-[18px] max-w-[215px]">
                ${title}
              </div>
              <div class="hind-madurai-regular text-[18px] text-[#5C5C5C]">
                ${number}
              </div>
            </div>
            <div class="hind-madurai-regular text-[18px]">${date}</div>
          </div>
        `
        document.getElementById("history-card-container").appendChild(div); 
      } else {
        alert("You do not have enough coins to make a call.")
      }
    }
    // Copy Btn
    else if (event.target.innerText === "Copy") {
      console.log("Clicked Copy");
      const number = card.querySelector("h3").innerText;
      navigator.clipboard.writeText(number);
      alert(`Number Copied: ${number}`);
      copyCounter++;
      document.getElementById("copy-count").innerText = copyCounter;
    }
    // Heart Btn
    else if (event.target.className.includes("fa-heart")) {
      heartCounter++;
      document.getElementById("heart-count").innerText = heartCounter;
    }
  });
