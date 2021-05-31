const News = document.getElementById('News');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.author.toLowerCase().includes(searchString)
        );
    });
    display(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-04-30&sortBy=publishedAt&apiKey=01a4ed9cbe1b4f048457868df3864029');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (News) => {
    const htmlString = News
        .map((News) => {
            return `
            <li class="News">
                <h2>${News.name}</h2>
                <p>: ${News.author}</p>
                <p>: ${News.title}"></p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
