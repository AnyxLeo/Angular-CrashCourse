import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'TitleCase'
})
export class TitleCasePipe implements PipeTransform {

    transform(value: string, args?: any)
    {
        if (!value)
            return null;
        
        var title: string[] = value.toLowerCase().split(' ');
        
        title[0] = this.TitleCase(title[0]);

        for (var i = 1; i < title.length; i++)
        {
            let word = title[i];
            if (!this.isPreposition(word))
            {
                title[i] = this.TitleCase(word);
            }
           
        }

        return title.join(' ');
    }  

    private TitleCase(word: string)
    {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }

    private isPreposition(word: string)
    {
        let prepositions = ['the', 'of', 'to'];
        return prepositions.indexOf(word)>-1;
    }
}