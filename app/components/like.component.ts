import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<i class="fa" 
                [class.fa-thumbs-o-up]=!isLiked
                [class.fa-thumbs-up]=isLiked
                aria-hidden="true" (click)="ToLike()"></i> {{total}}`
})
export class LikeComponent {
    total: number = 10;
    isLiked: boolean = false;

    constructor()
    { }

    ToLike()
    {
        this.isLiked ? this.total-- : this.total++
        this.isLiked == !this.isLiked;
    }
}