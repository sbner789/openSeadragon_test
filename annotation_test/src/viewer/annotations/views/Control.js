import { extend, Button, ControlAnchor } from '../../openseadragon/openseadragon';
import drawRest from '../icons/draw_rest.png';
import drawGroupHover from '../icons/draw_grouphover.png';
import drawHover from '../icons/draw_hover.png';
import drawDown from '../icons/draw_pressed.png';
import moveRest from '../icons/move_rest.png';
import moveGroupHover from '../icons/move_grouphover.png';
import moveHover from '../icons/move_hover.png';
import moveDown from '../icons/move_pressed.png';

export default class Control {
    constructor(options) {
      this.dispatch = options.dispatch;
      this.model = options.model;
      this.viewer = options.viewer;
      // this.mode = options.Tooltip.toUpperCase();
      this.mode = options.Tooltip
      this.btn = new Button(extend({
        onClick: (e) => { this.onClick(e); },
      }, options));
      this.viewer.addControl(this.btn.element, {
        anchor: ControlAnchor.BOTTOM_LEFT,
      });
      if (this.model.mode === this.mode) {
        this.activate();
      }
      this.model.addHandler('CHANGE_EVENT', () => {
        if (this.model.mode === this.mode) {
          this.activate();
        } else {
          this.deactivate();
        }
      });
    }
  
    activate() {
      this.btn.imgDown.style.visibility = 'visible';
    }
  
    deactivate() {
      this.btn.imgDown.style.visibility = 'hidden';
    }
  
    onClick({ eventSource }) {
      if (eventSource.Tooltip) {
        const mode = eventSource.Tooltip.toUpperCase();
        this.dispatch({ type: 'MODE_UPDATE', mode });
      }
    }
  }

  export class DrawControl extends Control {
    constructor(options) {
        super({
            Tooltip: "Draw",
            srcRest: drawRest,
            srcGroup: drawGroupHover,
            srcHover: drawHover,
            srcDown: drawDown,
            ...options,
        });
    }
}


  export class MoveControl extends Control {
    constructor(options) {
        super({
            Tooltip: 'Move',
            srcRest: moveRest,
            srcGroup: moveGroupHover,
            srcHover: moveHover,
            srcDown: moveDown,
            ...options
        });
    }
}