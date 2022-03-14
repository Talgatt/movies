export function getGenreNames(allGenres, res) {
  const gNames = [];
  if (allGenres !== undefined) {
    allGenres.map((genre) => {
      if (res.hasOwnProperty("genre_ids")) {
        res.genre_ids.map((id) => {
          if (Number(id) === Number(genre.id)) {
            if (gNames.indexOf(genre.name) == -1) {
              gNames.push(genre);
            }
          }
        });
      }
    });
  }
  return gNames;
}
