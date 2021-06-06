import {LodashComponents} from "../lodashFunction";
import {deleteMovieById, searchById, searchByName} from "../whole-content";
import html from "./card.html";
import {appHistory} from "../history-app";
import {AddNew, addNewMovie, plusRow} from "../add-new/add-new";


const noResult = []
noResult.push(document.createElement("div"))
noResult[0].innerText = "no result"

class Card extends LodashComponents {
    constructor(html, data, id) {
        super(html, data);
        this.id = id;
        this.html = this.render();
        this.buttons = this.findButtons()
        this.link = this.goToMovie()

    }

    findButtons() {
        const buttons = this.html.querySelectorAll("button")
        buttons[1].addEventListener("click", this.removeMovie.bind(this))
        buttons[0].addEventListener("click", this.changeMovie.bind(this))
        return buttons
    }

    removeMovie() {
        if (confirm("Delete the film?")) {
            deleteMovieById(this.id)
            appHistory.push({pathname: `/`})
        }
    }

    goToMovie() {
        this.html.querySelector("a").addEventListener("click", (event) => {
            event.preventDefault()
            appHistory.push({pathname: `/movie/${this.id}`})
        })
    }

    changeMovie() {
        const movie = searchById(this.id);
        const modal = addNewMovie(movie.extra.length-1, this.id);
        if(document.body.querySelector("#modaldialog")) document.body.removeChild(document.body.querySelector("#modaldialog"))
        document.body.appendChild(modal.html);
        const inputs = modal.getAllInputs();
        for (let i of Object.keys(movie)) {
            const input = inputs.find((el) => el.id === i);
            if (input) input.value = movie[i];
        }
        let roll = 0
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].placeholder ==="Должность") {
                inputs[i].value = Object.keys(movie.extra[roll++])[0];
            }}
        let name = 0
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].placeholder ==="Имя") {
                inputs[i].value = Object.values(movie.extra[name++])[0];
            }
        }

    }
}

export function getCard(id) {
    const result = searchById(id)
    if (!result) return false
    return (new Card(html, result, id)).html;
}

export function getCardByName(name) {
    const movies = searchByName(name);
    if (!movies[0]) return noResult;
    for (let i = 0; i < movies.length; i++) {
        const id = movies[i].id;
        movies[i] = (new Card(html, movies[i], id)).render()
        movies[i].addEventListener("click", (event) => {
            event.preventDefault();
            appHistory.push({pathname: `/movie/${id}`});
        })
    }
    return movies;
}