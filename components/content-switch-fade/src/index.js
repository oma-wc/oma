import { State } from "@oma-wc/state";
import { ContentSwitch } from "@oma-wc/content-switch";

const SLIDE_CLASS_NAME = "oma-content-switch-fade";
const ACTIVE_SLIDE_CLASS_NAME = `${SLIDE_CLASS_NAME}--active`;
State.stylesheet.add_rule(
  `.${SLIDE_CLASS_NAME} {
    grid-column: 1;
    grid-row: 1;
    opacity: 0;
    transition: opacity 400ms ease-in-out;
    width: 100%;
  }`
);
State.stylesheet.add_rule(
  `.${SLIDE_CLASS_NAME}.${ACTIVE_SLIDE_CLASS_NAME} {
    opacity: 1;
    transition: opacity 400ms ease-in-out 600ms;
  }`
);

State.stylesheet.write();

class ContentSwitchFade extends ContentSwitch {
  constructor() {
    super({
      slideClassName: SLIDE_CLASS_NAME,
      activeSlideClassName: ACTIVE_SLIDE_CLASS_NAME,
    });
  }
}

customElements.define("oma-content-switch-fade", ContentSwitchFade);
