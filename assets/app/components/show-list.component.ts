import {OnInit, Component} from "@angular/core";
import {ShowComponent} from "./show.component";
import {Show} from "../models/show";

@Component({
    selector: "my-show-list",
    template:`
        <section  class="col-md-8 col-md-offset-2">
            <my-show ngFor="let show of shows"></my-show>
        </section>
        `,
    directives: [ShowComponent]
})

export class ShowListComponent implements OnInit{


    shows: Show[] = [new Show("breaking bad",  "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg")];

    ngOnInit(){}
}