import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from "./template-driven-form.component";
import {DataDrivenFormComponent} from "./data-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <!--<my-template-driven></my-template-driven>-->
        <my-data-driven></my-data-driven>
    `,
    // directives: [TemplateDrivenFormComponent],
    directives: [DataDrivenFormComponent],
})
export class AppComponent {

}
