import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'address',
    templateUrl: 'app/address.component.html',
})
export class AddressComponent {
    @Input('group')
    public adressForm: FormGroup;
}