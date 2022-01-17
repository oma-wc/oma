import { State } from "@oma-wc/state";
import { ContentSwitch } from "@oma-wc/content-switch";

const childrenClassName = "oma-content-switch-fade";
const activeChildClass = `${childrenClassName}--active`;
const childrenActivateAnimationClassName = `${childrenClassName}__animation`;
State.stylesheet.add_rule(
  `.${childrenClassName} {
    opacity: 0;
    position: absolute;
    width: 100%;
  }`
);
State.stylesheet.add_rule(
  `.${childrenActivateAnimationClassName} {
    transition: opacity 400ms ease-in-out;
  }`
);
State.stylesheet.add_rule(
  `.${childrenClassName}.${activeChildClass} {
    opacity: 1;
    transition: opacity 400ms ease-in-out 600ms;
  }`
);

State.stylesheet.write();

class ContentSwitchFade extends ContentSwitch {
  constructor() {
    super({
      childrenClassName,
      activeChildClass,
      childrenActivateAnimationClassName,
    });
  }
}

customElements.define("oma-content-switch-fade", ContentSwitchFade);
