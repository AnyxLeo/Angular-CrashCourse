import { Component, Input } from '@angular/core';

@Component({
    selector: 'like',
    templateUrl: 'app/components/like.component.html',
    styleUrls: ['app/components/like.component.css']
})
export class LikeComponent {
    @Input('isLiked')
    isLiked: boolean;
    @Input('totalLikes')
    totalLikes: number;

    OnClick() {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
    }
}
