import {NgModule} from '@angular/core';

import { contadorComponent } from './subcontador/contador.component';

@NgModule({
    declarations:[contadorComponent],
    exports:[contadorComponent],
    imports:[]
})

export class ContadorModule {

}


