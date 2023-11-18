const allMatches = document.querySelector(".all-matches");
const match = document.querySelector(".match");
const addMatchBtn = document.querySelector(".lws-addMatch");
let matchNumber = 2;

const addMatch = () => {
  const newMatch = document.createElement("div");
  newMatch.classList.add("match");

  newMatch.innerHTML = `
    <div class="wrapper">
        <button class="lws-delete">
          <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${matchNumber}</h3>
      </div>
      <div class="inc-dec">
        <form class="incrementForm">
          <h4>Increment</h4>
          <input type="number" name="increment" class="lws-increment" />
        </form>
        <form class="decrementForm">
          <h4>Decrement</h4>
          <input type="number" name="decrement" class="lws-decrement" />
        </form>
      </div>
      <div class="numbers">
        <h2 class="lws-singleResult">0</h2>
      </div>
    `;

  allMatches.appendChild(newMatch);

  matchNumber++;
};
