import { Component,  } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
    selector: 'Authors',
    template: `
            <h2>{{authorsTotal}} Authors</h2>
            <ul>
                <li *ngFor="let author of authors">{{author}}</li>
            </ul>
    `
})
export class AuthorsComponent  {
    authorsTotal: number = 0;
    authors: string[];
    constructor(private service: AuthorsService)
    {
        this.authors = service.GetAuthors();
        this.authorsTotal = this.authors.length;
    }

    
}