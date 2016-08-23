import { Component } from '@angular/core';
import {ShowListComponent} from "./components/show-list.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives : [ShowListComponent]
})
export class AppComponent {
  
}