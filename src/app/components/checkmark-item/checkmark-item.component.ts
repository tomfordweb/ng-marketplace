import { Component, Input } from "@angular/core";

@Component({
  selector: "app-checkmark-item",
  template: `<span
    [ngClass]="{
      active: checked
    }"
    ><ng-content></ng-content
  ></span>`,
  styleUrls: ["./checkmark-item.component.scss"],
})
export class CheckmarkItemComponent {
  @Input() public checked: boolean | undefined = false;
}
