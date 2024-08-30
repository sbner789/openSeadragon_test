import { Rect } from '../openseadragon/openseadragon';
import { h, render } from "preact";
import Overlay from './views/Overlay';
import { DrawControl, MoveControl } from './views/Control'
import createDispatcher from './models/createDispatcher';
import generalActions from './models/generalActions';
import createModel from './models/createModel';

const annotationsPrototype = {
    onOpen() {
      this.overlay = render(h(Overlay, { dispatch: this.dispatch, model: this.model }));
      const homeBounds = this.viewer.world.getHomeBounds();
      this.viewer.addOverlay(this.overlay, new Rect(0, 0, homeBounds.width, homeBounds.height));
      const zoom = this.viewer.viewport.getZoom();
      const { width, height } = this.overlay.getBoundingClientRect();
      this.dispatch({ type: 'INITIALIZE', zoom, width, height });
      this.controls = [
        new MoveControl({ dispatch: this.dispatch, model: this.model, viewer: this.viewer }),
        new DrawControl({ dispatch: this.dispatch, model: this.model, viewer: this.viewer }),
      ];
    },
  
    onClose() {
      // TODO
    },
  
    getAnnotations() {
      return this.model.getAll();
    },
  
    setAnnotations(annotations) {
      this.dispatch({ type: 'ANNOTATIONS_RESET', annotations });
    },
  
    cleanAnnotations() {
      this.dispatch({ type: 'ANNOTATIONS_RESET' });
    },
  
    getMode() {
      return this.model.mode;
    },
  
    setMode(mode) {
      this.dispatch({ type: 'MODE_UPDATE', mode });
    },
  
    getStatus() {
      return { active: !!this.overlay };
    },
  };
  
  export default ({ viewer }) => {
    const model = createModel();
    const dispatch = createDispatcher(model, generalActions);
    const annotations = Object.create(annotationsPrototype);
    Object.assign(annotations, { viewer, model, dispatch });
    viewer.addHandler('open', () => annotations.onOpen());
    viewer.addHandler('zoom', ({ zoom }) => annotations.dispatch({ type: 'ZOOM_UPDATE', zoom }));
    if (viewer.isOpen()) { annotations.onOpen(); }
    return annotations;
  };