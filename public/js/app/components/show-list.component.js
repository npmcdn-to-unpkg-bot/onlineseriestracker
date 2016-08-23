"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var show_component_1 = require("./show.component");
var show_1 = require("../models/show");
var ShowListComponent = (function () {
    function ShowListComponent() {
        this.shows = [new show_1.Show("breaking bad", "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg")];
    }
    ShowListComponent.prototype.ngOnInit = function () { };
    ShowListComponent = __decorate([
        core_1.Component({
            selector: "my-show-list",
            template: "\n        <section  class=\"col-md-8 col-md-offset-2\">\n            <my-show ngFor=\"let show of shows\"></my-show>\n        </section>\n        ",
            directives: [show_component_1.ShowComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowListComponent);
    return ShowListComponent;
}());
exports.ShowListComponent = ShowListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvdy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLHFCQUFtQixnQkFBZ0IsQ0FBQyxDQUFBO0FBWXBDO0lBQUE7UUFHSSxVQUFLLEdBQVcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxjQUFjLEVBQUcsa0dBQWtHLENBQUMsQ0FBQyxDQUFDO0lBR3BKLENBQUM7SUFERyxvQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQWZoQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUMsb0pBSUo7WUFDTCxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzlCLENBQUM7O3lCQUFBO0lBUUYsd0JBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHlCQUFpQixvQkFNN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Nob3ctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uSW5pdCwgQ29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Nob3dDb21wb25lbnR9IGZyb20gXCIuL3Nob3cuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2hvd30gZnJvbSBcIi4uL21vZGVscy9zaG93XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LXNob3ctbGlzdFwiLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxzZWN0aW9uICBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICA8bXktc2hvdyBuZ0Zvcj1cImxldCBzaG93IG9mIHNob3dzXCI+PC9teS1zaG93PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1Nob3dDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hvd0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cclxuICAgIHNob3dzOiBTaG93W10gPSBbbmV3IFNob3coXCJicmVha2luZyBiYWRcIiwgIFwiaHR0cDovL2lhLm1lZGlhLWltZGIuY29tL2ltYWdlcy9NL01WNUJNVFEwT0RZek9EYzBPVjVCTWw1QmFuQm5Ya0Z0WlRnd01EazNPVGN5TURFQC5fVjFfU1gzMDAuanBnXCIpXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpe31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
