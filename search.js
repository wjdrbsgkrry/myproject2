window.onload = function(){
        // Search str
        let searchInput = document.getElementById("search-input");

        function Search() {
            // Cards
            let movieCard = document.getElementsByClassName("maincard");

            Array.from(movieCard).forEach(title => {
                let titleElement = title.querySelector(".movie_title");
                if (!titleElement.textContent.toUpperCase().includes(searchInput.value.toUpperCase())) {
                    title.style.display = "none";
                }
                else title.style.display = "block";
            });

            searchInput.value = "";
        }

        //Mouse Button
        const searchBtn = document.getElementById("search-button");
        searchBtn.addEventListener("click", Search);

        //Enter Key
        searchInput.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                Search();
            }
        });
}


