export const AsignGenreId = (genre: string): string => {
  if (genre.trim() === "acción") {
    genre = "28";
  } else if (genre.trim() === "aventura") {
    genre = "12";
  } else if (genre.trim() === "animación") {
    genre = "16";
  } else if (genre.trim() === "ciencia ficción") {
    genre = "878";
  } else if (genre.trim() === "crimen") {
    genre = "80";
  } else if (genre.trim() === "drama") {
    genre = "18";
  } else if (genre.trim() === "familia") {
    genre = "10751";
  } else if (genre.trim() === "fantasía") {
    genre = "14";
  } else if (genre.trim() === "misterio") {
    genre = "9648";
  } else if (genre.trim() === "romance") {
    genre = "10749";
  } else if (genre.trim() === "suspenso") {
    genre = "53";
  } else if (genre.trim() === "terror") {
    genre = "27";
  }

  return genre;
};
