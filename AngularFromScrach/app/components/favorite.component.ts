import { Component } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `<span class="glyphicon"
                [class.glyphicon-star]="isFavorite"
                [class.glyphicon-star-empty]="!isFavorite"
                (click)="onClick()"
                ></span>
                `
})
export class FavoriteComponent {
    isFavorite: boolean = false;
    onClick()
    {
        this.isFavorite = !this.isFavorite;
    }
}