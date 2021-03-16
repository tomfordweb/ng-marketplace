import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckmarkItemComponent } from "./checkmark-item.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CheckmarkItemComponent],
  exports: [CheckmarkItemComponent],
})
export class CheckmarkItemModule {}
