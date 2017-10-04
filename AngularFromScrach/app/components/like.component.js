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
    }
    LikeComponent.prototype.OnClick = function () {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input('isLiked'),
    __metadata("design:type", Boolean)
], LikeComponent.prototype, "isLiked", void 0);
__decorate([
    core_1.Input('totalLikes'),
    __metadata("design:type", Number)
], LikeComponent.prototype, "totalLikes", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: 'like',
        templateUrl: 'app/components/like.component.html',
        styleUrls: ['app/components/like.component.css']
    })
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map