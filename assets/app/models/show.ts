export class Show {
    //The title of the show
    title: string;

    //The year of the show
    year : string;

    rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating : number;
    imdbVotes: number;
    imdbID : string;
    Type : string;
    totalSeasons :number;
    Response: string;
/*
    constructor (title: string , year : string , rated: string ,Released: string ,
                Runtime: string ,Genre: string ,Director: string ,Writer: string ,Actors: string ,
                Plot: string ,Language: string ,Country: string ,Awards: string ,Poster: string ,
                Metascore: string ,imdbRating : number ,imdbVotes: number ,imdbID : string ,Type : string ,
                totalSeasons :number ,Response: string ) {
        this.title = title;
        this.year = year;
        this.rated = rated;
        this.Released = Released;
        this.Runtime = Runtime;
        this.Genre = Genre;
        this.Director = Director;
        this.Writer = Writer;
        this.Actors = Actors;
        this.Plot = Plot;
        this.Language = Language;
        this.Country = Country;
        this.Awards = Awards;
        this.Poster = Poster;
        this.Metascore = Metascore;
        this.imdbRating = imdbRating;
        this.imdbVotes = imdbVotes;
        this.imdbID = imdbID;
        this.Type = Type;
        this.totalSeasons = totalSeasons;
        this.Response = Response;
        */

    constructor(title: string, poster:string){
        this.title= title;
        this.Poster = poster;
    }
}