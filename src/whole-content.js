const data = [
    {
        "id": 1,
        "name": "Гори, гори ясно",
        "origin": "Brightburn",
        "year": 2019,
        "country": "USA",
        "tagline": "«Imagine What He Could Become»",
        "director": "David Yarovesky",
        "imdb": 6.4,
        "description": "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
        "likes": [
            6,
            2
        ],
        "extra": [
            {"сценарий": "Брайан Ганн, Марк Ганн"},
            {"продюсер": "Джеймс Ганн, Брайан Ганн, Марк Ганн"},
            {"оператор": "Майкл Даллаторре"},
            {"композитор": "Тим Уильямс"}

        ],
        "poster": "https://m.media-amazon.com/images/M/MV5BMjc0YzM2ZjItNzE3OS00NTRhLTkyNTUtMjY5Y2Y5NTU3OWI0XkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        "stars": "Элизабет Бэнкс,Дэвид Денман,Джексон А. Данн,Абрахам Клинкскейлз,Кристиан Финлейсон,Дженнифер Холлэнд,Эмми Хантер,Мэтт Джонс,Мередит Хагнер,Бекки Уолстром"

    },
    {
        "id": 2,
        "name": "Мстители",
        "origin": "Avengers",
        "year": 2012,
        "country": "USA",
        "tagline": "«Мстители спасают лишь Землю бренную, а эти ребята спасают Вселенную»",
        "director": "Joss Whedon",
        "imdb": 8.0,
        "description": "Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля на грани порабощения, и только лучшие из лучших могут спасти человечество.",
        "likes": [
            15,
            1
        ],
        "extra": [
            {"сценарий": "Джосс Уидон, Зак Пенн"},
            {"продюсер": "Кевин Файги"},
            {"оператор": "Шеймас Макгарви"},
            {"композитор": "Алан Сильвестри"}

        ],
        "poster": "https://i.pinimg.com/originals/0f/03/e6/0f03e6733b0cf567cc92e8e20290462f.jpg",
        "stars": "Роберт Дауни-младший, Крис Эванс,Марк Руффало, Крис Хемсворт, Скарлетт Йоханссон, Джереми Реннер, Том Хиддлстон, Сэмюэл Л. Джексон"

    },
    {
        "id": 3,
        "name": "Человек-паук: Вдали от дома",
        "origin": "Spider-man : Far from home",
        "year": 2019,
        "country": "USA",
        "tagline": "«Turn your world upside down»",
        "director": "Jon Watts",
        "imdb": 7.5,
        "description": "Питер Паркер вместе с друзьями отправляется на летние каникулы в Европу. Однако отдохнуть приятелям вряд ли удастся — Питеру придется согласиться помочь Нику Фьюри раскрыть тайну существ, вызывающих стихийные бедствия и разрушения по всему континенту.",
        "likes": [
            12,
            4
        ],
        "extra": [
            {"сценарий": "Стэн Ли, Стив Дитко"},
            {"продюсер": "Кевин Файги, Эми Паскаль"},
            {"оператор": "Мэттью Дж. Ллойд"},
            {"композитор": "Майкл Джаккино"}

        ],
        "poster": "https://media.kg-portal.ru/movies/s/spidermanfarfromhome/posters/spidermanfarfromhome_18.jpg",
        "stars": "Том Холланд,Сэмюэл Л. Джексон, Зендая, Коби Смолдерс, Джон Фавро, Дж. Б. Смув, Джейкоб Баталон, Мартин Старр"

    },
    {
        "id": 4,
        "name": "Дедпул",
        "origin": "Deadpool",
        "year": 2016,
        "country": "USA",
        "tagline": "«With great power comes great irresponsibility.»",
        "director": "Tim Miller",
        "imdb": 8.0,
        "description": "Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон приобрёл невероятную силу, проворство и способность к исцелению.",
        "likes": [
            8,
            4
        ],
        "extra": [
            {"сценарий": "Роб Лайфелд, Фабиан Нициеза"},
            {"продюсер": "Лорен Шулер Доннер, Саймон Кинберг, Райан Рейнольдс"},
            {"оператор": "Кен Сенг"},
            {"композитор": "Junkie XL"}

        ],
        "poster": "https://joelamoroney.files.wordpress.com/2016/02/deadpool-movie-poster.jpg?w=479",
        "stars": "Райан Рейнольдс, Морена Баккарин, Эд Скрейн, Т. Дж. Миллер, Джина Карано, Брианна Хильдебранд"

    }
]

export function searchById(id) {
    const result = (loadMovies("movies")).find((el) => el.id === id)
    if (result) return result
    return false
}

export function searchByName(name) {
    return loadMovies("movies").filter((el) => el.name.includes(name))
}

export function saveNew(movie) {
    const oldMoviesList = loadMovies("movies")
    movie.id = (oldMoviesList[oldMoviesList.length - 1]).id + 1
    oldMoviesList.push(movie)
    localStorage.setItem("movies", JSON.stringify(oldMoviesList))
    return movie.id
}

export function loadMovies(key) {
    try {
        JSON.parse(localStorage.getItem(key)) || localStorage.setItem("movies", JSON.stringify(data))
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error("error at arr in localstorage");
    }
}

export function updateMovie(movie) {
    const oldMovies = loadMovies("movies");
    const id = movie.id -1 ;
    oldMovies[id] = movie;
    localStorage.setItem("movies", JSON.stringify(oldMovies))
    return id
}

export function deleteMovieById(id) {
    const oldMovies = loadMovies("movies");
    const toDel = oldMovies.find((el) => el.id === id)
    const index = oldMovies.indexOf(toDel)
    oldMovies.splice((index), 1);
    localStorage.setItem("movies", JSON.stringify(oldMovies));
}