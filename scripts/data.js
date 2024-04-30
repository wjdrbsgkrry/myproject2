const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTVmYzM3ZjUyMWZiZDFjOWVlZTdkZTBjZTc0ZDliMiIsInN1YiI6IjY2MjhlMjliZTI5NWI0MDE2NDliYWRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1d0sVFGdfWx4ElPtuCwkyhco9Z8yWzc637IyzwNlz0Y"
  }
};

async function loadData(url, option) {
  let res = await fetch(url, option)
    .then((res) => res.json())
    .catch((error) => alert(`error: ${error}`));
  return res;
}

async function loadMovie() {
  try {
    const { results } = await loadData("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
    // root class Select
    const input = document.getElementById("movie-input");

    Array.prototype.forEach.call(results, (data) => {
      // image title view average id
      const Moviedata = {
        posterPath: data.poster_path,
        title: data.title,
        overview: data.overview,
        voteAverage: data.vote_average,
        id: data.id
      };

      const temp = document.createElement("div");
      temp.classList.add("maincard");
      temp.setAttribute("id", Moviedata.id);

      // inner Create
      temp.innerHTML = `<div class="thecard">
                <div class="thefront">
                    <img class="movie_image" src="https://image.tmdb.org/t/p/w500/${Moviedata.posterPath}"></img>
                    <h3 class="movie_title">${Moviedata.title}</h3>
                    <h4 class="movie_text">${Moviedata.overview}</h4>
                    <h4 class="movie_text">${Moviedata.voteAverage}</h4>
                </div>
                <div class="theback">
                <img class="movie_image_back" src="https://image.tmdb.org/t/p/w500/${Moviedata.posterPath}"></img>
                </div>
            </div>`;

      input.appendChild(temp);

      //Event
      temp.addEventListener("click", function () {
        alert(`id : ${Moviedata.id}`);
      });
    });
  } catch (err) {
    alert("err" + err);
  }
}

loadMovie();
