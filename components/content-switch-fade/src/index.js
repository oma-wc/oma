import { State } from "@oma-wc/state";
import { ContentSwitch } from "@oma-wc/content-switch";

const className = "oma-content-switch-fade";
const classNameActive = `${className}--active`;
const animationClass = `${className}__animation`;
State.stylesheet.add_rule(
  `.${className} {
    opacity: 0;
    position: absolute;
    width: 100%;
  }`
);
State.stylesheet.add_rule(
  `.${animationClass} {
    transition: opacity 400ms ease-in-out;
  }`
);
State.stylesheet.add_rule(
  `.${className}.${classNameActive} {
    opacity: 1;
    transition: opacity 400ms ease-in-out 600ms;
  }`
);

State.stylesheet.write();

class ContentSwitchFade extends ContentSwitch {
  constructor() {
    super({ className, classNameActive, animationClass });
  }
}

customElements.define("oma-content-switch-fade", ContentSwitchFade);
