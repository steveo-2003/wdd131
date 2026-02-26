const character = {
  name: 'Snortleblat',
  class: 'Swamp Beast Diplomat',
  level: 1,
  health: 100,
  image: './images/snortleblat.webp', // Ensure the path is relative to the HTML file
  attacked: function () {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died.`);
    }
    renderCharacter();
  },
  levelUp: function () {
    this.level++;
    renderCharacter();
  },
};

function renderCharacter() {
  document.querySelector("#characterName").textContent = character.name;
  document.querySelector("#characterImage").src = character.image;
  document.querySelector("#characterClass").textContent = `Class: ${character.class}`;
  document.querySelector("#characterLevel").textContent = `Level: ${character.level}`;
  document.querySelector("#characterHealth").textContent = `Health: ${character.health}`;
}

document.querySelector("#attackButton").addEventListener("click", function () {
  character.attacked();
});

document.querySelector("#levelUpButton").addEventListener("click", function () {
  character.levelUp();
});

renderCharacter();
