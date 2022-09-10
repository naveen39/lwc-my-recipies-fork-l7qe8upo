import { LightningElement, track } from "lwc";

export default class TreeGridExpanded extends LightningElement {
  @track toggleTask = "utility:chevronright";
  @track expandToggle =
    "slds-timeline__item_expandable slds-timeline__item_task";
  handleClick() {
    //console.log("alert");
    //alert("handleClick");
    if (this.toggleTask == "utility:chevrondown") {
      this.toggleTask = "utility:chevronright";
      this.expandToggle =
        "slds-timeline__item_expandable slds-timeline__item_task";
    } else {
      this.toggleTask = "utility:chevrondown";
      this.expandToggle =
        "slds-timeline__item_expandable slds-timeline__item_task slds-is-open";
    }
  }
}
