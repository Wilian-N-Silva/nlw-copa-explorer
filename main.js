function createGame(player1, hour, player2) {
	return `
      <li>
        <img
          src="./assets/flags/icon-${player1}.svg"
          alt="Bandeira do ${player1}"
        />
        <strong>${hour}</strong>
        <img
          src="./assets/flags/icon-${player2}.svg"
          alt="Bandeira do ${player2}"
        />
      </li>
      `
}

function createCard(date, day, games) {
	return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo da NLW Copa" />
</header>
<main id="cards">
  ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
  ${createCard(
		"28/11",
		"segunda",
		createGame("brazil", "13:00", "switzerland") +
			createGame("portugal", "16:00", "uruguay")
	)}
  ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
</main>
`
