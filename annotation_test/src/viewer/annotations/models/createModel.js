import { EventSource } from "../../openseadragon/openseadragon";

export default () =>
    Object.assign(Object.create(EventSource.prototype), {
      events: {},
      mode: 'MOVE',
      zoom: 1,
      width: 0,
      height: 0,
      activityInProgress: false,
      annotations: [],
    });