import { State } from "@oma-wc/state";
import { ContentSwitch } from "@oma-wc/content-switch";

const CHILD_CLASS_NAME = "oma-content-switch-fade";
const ACTIVE_CHILD_CLASS_NAME = `${CHILD_CLASS_NAME}--active`;
const ANIMATION_CLASS_NAME = `${CHILD_CLASS_NAME}__animation`;
State.stylesheet.add_rule(
  `.${CHILD_CLASS_NAME} {
    opacity: 0;
    position: absolute;
    width: 100%;
  }`
);
State.stylesheet.add_rule(
  `.${ANIMATION_CLASS_NAME} {
    transition: opacity 400ms ease-in-out;
  }`
);
State.stylesheet.add_rule(
  `.${CHILD_CLASS_NAME}.${ACTIVE_CHILD_CLASS_NAME} {
    opacity: 1;
    transition: opacity 400ms ease-in-out 600ms;
  }`
);

State.stylesheet.write();

class ContentSwitchFade extends ContentSwitch {
  constructor() {
    super({
      childClassName: CHILD_CLASS_NAME,
      activeChildClassName: ACTIVE_CHILD_CLASS_NAME,
      animationClassName: ANIMATION_CLASS_NAME,
    });
  }
}

customElements.define("oma-content-switch-fade", ContentSwitchFade);
