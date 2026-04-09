// Array to store reviews
const reviews = [
    {
        title: "Project Hail Mary",
        description: "Scientist and School teacher Ryland Grace must save the world from an unknown danger.",
        rating: "⭐⭐⭐⭐⭐",
        medium: "Movie",
        genre: "Science Fiction",
        time: "Approx. 2 hours",
        timeCategory: "Medium",
        image: "images/project_hail_mary_xlg.jpg"
    },
    {
        title: "Mistborn: The Final Empire",
        description: "A ragtag crew of thieves are hired to kill the God-King and save the world from his 1000 years of tyranny.",
        rating: "⭐⭐⭐⭐⭐",
        medium: "Book",
        genre: "Fantasy",
        time: "Approx. 30 hours",
        timeCategory: "Long",
        image: "images/TFE_Dragonsteel_Starter_pack_cover.jpg"
    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        description: "The hero Link wakes up after failing to save the world 100 years ago and must find and save the princess Zelda from Calamity Ganon.",
        rating: "⭐⭐⭐⭐⭐",
        medium: "Game",
        genre: "Open World Action-Adventure",
        time: "Approx. 80 hours",
        timeCategory: "Long",
        image: "images/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
        title: "Hollow Knight: Silksong",
        description: "Hornet must ascend to the top of a haunted kingdom and find the source of a mysterious plague.",
        rating: "⭐⭐⭐⭐⭐",
        medium: "Game",
        genre: "Metroidvania",
        time: "Approx. 50 hours",
        timeCategory: "Long",
        image: "images/Silksong.jpg"
    },
    {
        title: "Bloons Tower Defense 6",
        description: "Buy monkeys to defend against increasingly difficult waves of enemy bloons.",
        rating: "⭐⭐⭐⭐⭐",
        medium: "Game",
        genre: "Tower Defense",
        time: "Approx. infinite hours",
        timeCategory: "Long",
        image: "images/Bloons_TD_6_Logo.png"
    }
];

// Select the review container dynamically based on the current page
const reviewContainer = document.querySelector(".review-container");

if (reviewContainer) {
    function displayReviews() {
        reviewContainer.innerHTML = "";
        reviews.slice(0, 3).forEach(review => {
            reviewContainer.innerHTML += `
                <div class="review" onclick="viewReview('${review.title}')">
                    <img src="${review.image}" alt="${review.title}">
                    <h3>${review.title}</h3>
                    <p>${review.description}</p>
                    <p>Rating: ${review.rating}</p>
                    <p>${review.time}</p>
                </div>
            `;
        });
    }

    function filterReviews() {
        const searchBox = document.getElementById("search-box");
        const ratingFilter = document.getElementById("rating-filter");
        const mediumFilter = document.getElementById("medium-filter");
        const genreFilter = document.getElementById("genre-filter");
        const timeFilter = document.getElementById("time-filter");

        const searchTerm = searchBox ? searchBox.value.toLowerCase() : "";
        const rating = ratingFilter ? ratingFilter.value : "";
        const medium = mediumFilter ? mediumFilter.value : "";
        const genre = genreFilter ? genreFilter.value : "";
        const time = timeFilter ? timeFilter.value : "";

        const filteredReviews = reviews.filter(review => {
            const matchesSearch = review.title.toLowerCase().includes(searchTerm) || review.description.toLowerCase().includes(searchTerm);
            const matchesRating = !rating || review.rating === rating;
            const matchesMedium = !medium || review.medium === medium;
            const matchesGenre = !genre || review.genre === genre;
            const matchesTime = !time || review.timeCategory === time;

            return matchesSearch && matchesRating && matchesMedium && matchesGenre && matchesTime;
        });

        reviewContainer.innerHTML = "";
        filteredReviews.forEach(review => {
            reviewContainer.innerHTML += `
                <div class="review" onclick="viewReview('${review.title}')">
                    <img src="${review.image}" alt="${review.title}">
                    <h3>${review.title}</h3>
                    <p>${review.description}</p>
                    <p>Rating: ${review.rating}</p>
                    <p>${review.time}</p>
                </div>
            `;
        });
    }

    function rotateLeft() {
        reviews.unshift(reviews.pop());
        displayReviews();
    }

    function rotateRight() {
        reviews.push(reviews.shift());
        displayReviews();
    }

    function viewReview(title) {
        alert(`Viewing detailed review for: ${title}`);
    }

    const searchBox = document.getElementById("search-box");
    const ratingFilter = document.getElementById("rating-filter");
    const mediumFilter = document.getElementById("medium-filter");
    const genreFilter = document.getElementById("genre-filter");
    const timeFilter = document.getElementById("time-filter");

    if (searchBox) searchBox.addEventListener("input", filterReviews);
    if (ratingFilter) ratingFilter.addEventListener("change", filterReviews);
    if (mediumFilter) mediumFilter.addEventListener("change", filterReviews);
    if (genreFilter) genreFilter.addEventListener("change", filterReviews);
    if (timeFilter) timeFilter.addEventListener("change", filterReviews);

    if (document.body.contains(searchBox)) {
        filterReviews();
    } else {
        displayReviews();
        document.getElementById("rotate-left").addEventListener("click", rotateLeft);
        document.getElementById("rotate-right").addEventListener("click", rotateRight);
    }
}