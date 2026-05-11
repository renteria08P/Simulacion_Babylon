import * as BABYLON from "@babylonjs/core";

export const createSun = (scene) => {
  const sun = BABYLON.MeshBuilder.CreateSphere("sun", { diameter: 4 }, scene);

  const material = new BABYLON.StandardMaterial(
    "sunMat", 
    scene
);

  material.emissiveTexture = new BABYLON.Texture("/textures/sun.jpg", scene);

  material.disableLighting = true;

  sun.material = material;

  sun.mass = 500;

  return sun;
};
