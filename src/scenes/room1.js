import { setBackgroundColor } from "./roomUtils.js";

export function room1(k, roomData) {
  setBackgroundColor(k, "#a2aed5");

  const roomLayers = roomData.layers;

  const map = k.add([k.pos(0, 0), k.sprite("room1")]);
}
