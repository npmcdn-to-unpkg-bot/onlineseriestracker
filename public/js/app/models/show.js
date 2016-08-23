"use strict";
var Show = (function () {
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
    function Show(title, poster) {
        this.title = title;
        this.Poster = poster;
    }
    return Show;
}());
exports.Show = Show;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zaG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBMkJVO0lBRU4sY0FBWSxLQUFhLEVBQUUsTUFBYTtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFFLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsV0FBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFksWUFBSSxPQTJEaEIsQ0FBQSIsImZpbGUiOiJtb2RlbHMvc2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTaG93IHtcclxuICAgIC8vVGhlIHRpdGxlIG9mIHRoZSBzaG93XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8vVGhlIHllYXIgb2YgdGhlIHNob3dcclxuICAgIHllYXIgOiBzdHJpbmc7XHJcblxyXG4gICAgcmF0ZWQ6IHN0cmluZztcclxuICAgIFJlbGVhc2VkOiBzdHJpbmc7XHJcbiAgICBSdW50aW1lOiBzdHJpbmc7XHJcbiAgICBHZW5yZTogc3RyaW5nO1xyXG4gICAgRGlyZWN0b3I6IHN0cmluZztcclxuICAgIFdyaXRlcjogc3RyaW5nO1xyXG4gICAgQWN0b3JzOiBzdHJpbmc7XHJcbiAgICBQbG90OiBzdHJpbmc7XHJcbiAgICBMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgQ291bnRyeTogc3RyaW5nO1xyXG4gICAgQXdhcmRzOiBzdHJpbmc7XHJcbiAgICBQb3N0ZXI6IHN0cmluZztcclxuICAgIE1ldGFzY29yZTogc3RyaW5nO1xyXG4gICAgaW1kYlJhdGluZyA6IG51bWJlcjtcclxuICAgIGltZGJWb3RlczogbnVtYmVyO1xyXG4gICAgaW1kYklEIDogc3RyaW5nO1xyXG4gICAgVHlwZSA6IHN0cmluZztcclxuICAgIHRvdGFsU2Vhc29ucyA6bnVtYmVyO1xyXG4gICAgUmVzcG9uc2U6IHN0cmluZztcclxuLypcclxuICAgIGNvbnN0cnVjdG9yICh0aXRsZTogc3RyaW5nICwgeWVhciA6IHN0cmluZyAsIHJhdGVkOiBzdHJpbmcgLFJlbGVhc2VkOiBzdHJpbmcgLFxyXG4gICAgICAgICAgICAgICAgUnVudGltZTogc3RyaW5nICxHZW5yZTogc3RyaW5nICxEaXJlY3Rvcjogc3RyaW5nICxXcml0ZXI6IHN0cmluZyAsQWN0b3JzOiBzdHJpbmcgLFxyXG4gICAgICAgICAgICAgICAgUGxvdDogc3RyaW5nICxMYW5ndWFnZTogc3RyaW5nICxDb3VudHJ5OiBzdHJpbmcgLEF3YXJkczogc3RyaW5nICxQb3N0ZXI6IHN0cmluZyAsXHJcbiAgICAgICAgICAgICAgICBNZXRhc2NvcmU6IHN0cmluZyAsaW1kYlJhdGluZyA6IG51bWJlciAsaW1kYlZvdGVzOiBudW1iZXIgLGltZGJJRCA6IHN0cmluZyAsVHlwZSA6IHN0cmluZyAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFNlYXNvbnMgOm51bWJlciAsUmVzcG9uc2U6IHN0cmluZyApIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy55ZWFyID0geWVhcjtcclxuICAgICAgICB0aGlzLnJhdGVkID0gcmF0ZWQ7XHJcbiAgICAgICAgdGhpcy5SZWxlYXNlZCA9IFJlbGVhc2VkO1xyXG4gICAgICAgIHRoaXMuUnVudGltZSA9IFJ1bnRpbWU7XHJcbiAgICAgICAgdGhpcy5HZW5yZSA9IEdlbnJlO1xyXG4gICAgICAgIHRoaXMuRGlyZWN0b3IgPSBEaXJlY3RvcjtcclxuICAgICAgICB0aGlzLldyaXRlciA9IFdyaXRlcjtcclxuICAgICAgICB0aGlzLkFjdG9ycyA9IEFjdG9ycztcclxuICAgICAgICB0aGlzLlBsb3QgPSBQbG90O1xyXG4gICAgICAgIHRoaXMuTGFuZ3VhZ2UgPSBMYW5ndWFnZTtcclxuICAgICAgICB0aGlzLkNvdW50cnkgPSBDb3VudHJ5O1xyXG4gICAgICAgIHRoaXMuQXdhcmRzID0gQXdhcmRzO1xyXG4gICAgICAgIHRoaXMuUG9zdGVyID0gUG9zdGVyO1xyXG4gICAgICAgIHRoaXMuTWV0YXNjb3JlID0gTWV0YXNjb3JlO1xyXG4gICAgICAgIHRoaXMuaW1kYlJhdGluZyA9IGltZGJSYXRpbmc7XHJcbiAgICAgICAgdGhpcy5pbWRiVm90ZXMgPSBpbWRiVm90ZXM7XHJcbiAgICAgICAgdGhpcy5pbWRiSUQgPSBpbWRiSUQ7XHJcbiAgICAgICAgdGhpcy5UeXBlID0gVHlwZTtcclxuICAgICAgICB0aGlzLnRvdGFsU2Vhc29ucyA9IHRvdGFsU2Vhc29ucztcclxuICAgICAgICB0aGlzLlJlc3BvbnNlID0gUmVzcG9uc2U7XHJcbiAgICAgICAgKi9cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBwb3N0ZXI6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnRpdGxlPSB0aXRsZTtcclxuICAgICAgICB0aGlzLlBvc3RlciA9IHBvc3RlcjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
