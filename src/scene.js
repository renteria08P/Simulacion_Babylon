import * as BABYLON from "@babylonjs/core";

import { createEarth } from "./objects/earth.js";
import { createSun } from "./objects/sun.js";
import { createStars } from "./objects/stars.js";

export const createScene = (engine, canvas) => {
  const scene = new BABYLON.Scene(engine);

  scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

  // Cámara
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 3,
    25,
    BABYLON.Vector3.Zero(),
    scene,
  );

  camera.attachControl(canvas, true);

  // Luz
  const light = new BABYLON.PointLight(
    "light",
    new BABYLON.Vector3(0, 0, 0),
    scene,
  );

  light.intensity = 2;

  // Objetos
  const sun = createSun(scene);

  const earth = createEarth(scene);

  createStars(scene);

  // Órbita básica
  let angle = 0;

  const radius = 10;

  scene.registerBeforeRender(() => {
    angle += 0.01;

    earth.position.x = radius * Math.cos(angle);

    earth.position.z = radius * Math.sin(angle);

    earth.rotation.y += 0.01;

    sun.rotation.y += 0.002;
  });

  return scene;
};
