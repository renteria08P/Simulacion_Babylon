import * as BABYLON from "@babylonjs/core";

import "./styles/style.css";

import { createScene } from "./scene.js";

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true);

const scene = createScene(engine, canvas);

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
