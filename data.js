const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTVmYzM3ZjUyMWZiZDFjOWVlZTdkZTBjZTc0ZDliMiIsInN1YiI6IjY2MjhlMjliZTI5NWI0MDE2NDliYWRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1d0sVFGdfWx4ElPtuCwkyhco9Z8yWzc637IyzwNlz0Y'
    }
};

async function loadData(url, option) {
    let res = await fetch(url, option);
    if (res.status == 200) {
        return res.json();
    } else {
        alert("서버에 접속하지 못하였습니다.");
    }
}

async function loadMovie() {
    try {
        let res = await loadData("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
        // typeof : object
        res = res.results;

        // root class Select
        const input = document.getElementById("movie-input");
        
        Array.prototype.forEach.call(res, (data) => {
            // image title view average id
            const Moviedata = {
                posterPath: data.poster_path,
                title: data.title,
                overview: data.overview,
                voteAverage: data.vote_average,
                id: data.id
            };
        
            // div Create
            const mainCard = document.createElement('div');
            mainCard.classList.add("maincard");
            mainCard.id = Moviedata.id;
        
            const thecard = document.createElement('div');
            thecard.classList.add("thecard");
        
            const thefront = document.createElement('div');
            thefront.classList.add("thefront");
            thecard.appendChild(thefront); 
        
            const theback = document.createElement('div');
            theback.classList.add("theback");
            thecard.appendChild(theback); 
        
            const movie_image = document.createElement('img');
            movie_image.classList.add("movie_image");
            thefront.appendChild(movie_image); 
            movie_image.setAttribute("src", `https://image.tmdb.org/t/p/w500/${Moviedata.posterPath}`); 
        
            const movie_title = document.createElement('h3');
            movie_title.classList.add("movie_title");
            thefront.appendChild(movie_title); 
            movie_title.textContent = Moviedata.title; 
        
            const movie_text = document.createElement('h4');
            movie_text.classList.add("movie_text");
            thefront.appendChild(movie_text); 
            movie_text.textContent = Moviedata.overview; 
        
            const movie_text2 = document.createElement('h4');
            movie_text2.classList.add("movie_text");
            thefront.appendChild(movie_text2);
            movie_text2.textContent = `Rating: ${Moviedata.voteAverage}`; 
        
            const movie_image_back = document.createElement('img');
            movie_image_back.classList.add("movie_image_back");
            theback.appendChild(movie_image_back); 
            movie_image_back.setAttribute("src", `https://image.tmdb.org/t/p/w500/${Moviedata.posterPath}`); 
        
            // Append elements
            thecard.appendChild(thefront);
            thecard.appendChild(theback);
            mainCard.appendChild(thecard);
            input.appendChild(mainCard);
            
            //Event 
            mainCard.addEventListener("click", function () { alert(`id : ${Moviedata.id}`) });
        });

    }
    catch (err) {
        alert("err" + err);
    }
}

loadMovie();