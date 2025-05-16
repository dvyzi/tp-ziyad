document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/articles")
        .then((response) => response.json())
        .then((articles) => {
            const container = document.getElementById("articles-container");

            articles.forEach((article) => {
                const articleElement = document.createElement("article");
                articleElement.className = "article-card";

                const imageUrl = article.image;

                articleElement.innerHTML = `
                
                    <h2>${article.titre}</h2>
                    <div class="img-container">
                        <img src="${imageUrl}" alt="${article.titre}">
                    </div> 
                    <p>${article.description}</p> 
                `;

                container.appendChild(articleElement);
            });
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des articles:", error);
            document.getElementById("articles-container").innerHTML =
                '<p class="error">Impossible de charger les articles. Veuillez réessayer plus tard.</p>';
        });
});
