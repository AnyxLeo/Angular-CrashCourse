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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LikeComponent = (function () {
    function LikeComponent() {
        this.total = 10;
        this.isLiked = false;
    }
    LikeComponent.prototype.ToLike = function () {
        this.isLiked ? this.total-- : this.total++;
        this.isLiked == !this.isLiked;
    };
    return LikeComponent;
}());
LikeComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "<i class=\"fa\" \n                [class.fa-thumbs-o-up]=!isLiked\n                [class.fa-thumbs-up]=isLiked\n                aria-hidden=\"true\" (click)=\"ToLike()\"></i> {{total}}"
    }),
    __metadata("design:paramtypes", [])
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map