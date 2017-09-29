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
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            addresses: this._fb.array([])
        });
        // add address
        this.addAddress();
        /* subscribe to addresses value changes */
        // this.myForm.controls['addresses'].valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    };
    AppComponent.prototype.initAddress = function () {
        return this._fb.group({
            street: ['', forms_1.Validators.required],
            postcode: ['']
        });
    };
    AppComponent.prototype.addAddress = function () {
        var control = this.myForm.controls['addresses'];
        var addrCtrl = this.initAddress();
        control.push(addrCtrl);
        /* subscribe to individual address value changes */
        // addrCtrl.valueChanges.subscribe(x => {
        //   console.log(x);
        // })
    };
    AppComponent.prototype.removeAddress = function (i) {
        var control = this.myForm.controls['addresses'];
        control.removeAt(i);
    };
    AppComponent.prototype.save = function (model) {
        // call API to save
        // ...
        console.log(model);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map