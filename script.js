var lista = [
  "https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
  "https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg",
  "https://m.media-amazon.com/images/I/51FFvV73KLL.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Starwars_06.jpg/250px-Starwars_06.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/72/Star_wars_the_clone_wars.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/e/e7/The_Mandalorian_season_2_poster.jpg"
];

/* var nomes = [
  "Star Wars: Ameaça Fantasma",
  "Star Wars: A vingança dos Siths",
  "Star Wars: Uma nova esperança",
  "Star Wars: O império contra ataca",
  "Star Wars: O retorno do Jedi",
  "Star Wars: O despertar da força",
  "Série: A Guerra dos Clones",
  "Série: Mandaloriano"
];*/

for (var i = 0; i < lista.length; i++) {
  document.write("<img src=" + lista[i] + ">");
}