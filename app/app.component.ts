import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<i class="fa puntero" 
                [class.fa-thumbs-o-up]="!isLiked"
                [class.fa-thumbs-up]="isLiked"
                aria-hidden="true" (click)="ToLike()"></i> {{total}}`,
    styles: [`
                .puntero{
                    cursor:pointer;
                }               
            `]

})
export class AppComponent {
    total: number = 10;
    isLiked: boolean = false;

    constructor()
    { }

    ToLike() {
        this.isLiked ? this.total-- : this.total++
        this.isLiked = !this.isLiked;
    }
}
