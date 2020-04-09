import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToggleStarComponent } from './toggle-star.component';

@NgModule({
  imports: [
    FontAwesomeModule,
  ],
  declarations: [
    ToggleStarComponent,
  ],
  exports: [
    ToggleStarComponent,
  ],
})
export class ToggleStarModule {}

