import {Component, OnInit, Input} from '@angular/core';
import { Show } from '../models/show';

@Component({
    selector: 'my-show',
    template: `
    <div class="show row">
        <div class="infos">
             <img src="{{ show.poster }}" alt=" {{ show.title }}">
            <h2>{{title}}</h2>
        </div>
        
        <div class="buttons">
            <button (click)="onNextEpisode()">Next Episode</button>
            <button>Infos</button>
        </div>
       
    </div>
    `,

})

export class ShowComponent implements OnInit {

    @Input() show:Show;

    constructor ( ){ }

    poster: string = "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg";
    title: string = "Breaking bad";

    ngOnInit() { }

    onNextEpisode(){
        console.log("klmr");
    }
}