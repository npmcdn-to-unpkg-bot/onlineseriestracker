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
var core_1 = require('@angular/core');
var show_1 = require('../models/show');
var ShowComponent = (function () {
    function ShowComponent() {
        this.poster = "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg";
        this.title = "Breaking bad";
    }
    ShowComponent.prototype.ngOnInit = function () { };
    ShowComponent.prototype.onNextEpisode = function () {
        console.log("klmr");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', show_1.Show)
    ], ShowComponent.prototype, "show", void 0);
    ShowComponent = __decorate([
        core_1.Component({
            selector: 'my-show',
            template: "\n    <div class=\"show row\">\n        <div class=\"infos\">\n             <img src=\"{{ show.poster }}\" alt=\" {{ show.title }}\">\n            <h2>{{title}}</h2>\n        </div>\n        \n        <div class=\"buttons\">\n            <button (click)=\"onNextEpisode()\">Next Episode</button>\n            <button>Infos</button>\n        </div>\n       \n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxxQkFBcUIsZ0JBQWdCLENBQUMsQ0FBQTtBQXFCdEM7SUFJSTtRQUVBLFdBQU0sR0FBVyxrR0FBa0csQ0FBQztRQUNwSCxVQUFLLEdBQVcsY0FBYyxDQUFDO0lBSGQsQ0FBQztJQUtsQixnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHFDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFYRDtRQUFDLFlBQUssRUFBRTs7K0NBQUE7SUFyQlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHdYQWFUO1NBRUosQ0FBQzs7cUJBQUE7SUFnQkYsb0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHFCQUFhLGdCQWN6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2hvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNob3cgfSBmcm9tICcuLi9tb2RlbHMvc2hvdyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktc2hvdycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNob3cgcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9zXCI+XHJcbiAgICAgICAgICAgICA8aW1nIHNyYz1cInt7IHNob3cucG9zdGVyIH19XCIgYWx0PVwiIHt7IHNob3cudGl0bGUgfX1cIj5cclxuICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25OZXh0RXBpc29kZSgpXCI+TmV4dCBFcGlzb2RlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+SW5mb3M8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBzaG93OlNob3c7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCApeyB9XHJcblxyXG4gICAgcG9zdGVyOiBzdHJpbmcgPSBcImh0dHA6Ly9pYS5tZWRpYS1pbWRiLmNvbS9pbWFnZXMvTS9NVjVCTVRRME9EWXpPRGMwT1Y1Qk1sNUJhbkJuWGtGdFpUZ3dNRGszT1RjeU1ERUAuX1YxX1NYMzAwLmpwZ1wiO1xyXG4gICAgdGl0bGU6IHN0cmluZyA9IFwiQnJlYWtpbmcgYmFkXCI7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBvbk5leHRFcGlzb2RlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJrbG1yXCIpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
