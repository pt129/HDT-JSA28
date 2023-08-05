const getPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1"
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  getPokemon()

  const DEFAULT_VALUE = "__";
  const name = document.querySelector(".name");
  const type = document.querySelector(".type");
  const height = document.querySelector(".height");
  const weight = document.querySelector(".weight");
  const bio = document.querySelector(".bio");

