import * as BABYLON from "@babylonjs/core";

export const createEarth = (scene) => {
  const earth = BABYLON.MeshBuilder.CreateSphere(
    "earth",
    { diameter: 2 },
    scene,
  );

  const material = new BABYLON.StandardMaterial("earthMat", scene);

  material.diffuseTexture = new BABYLON.Texture("/textures/earth.jpg", scene);

  earth.material = material;

  earth.mass = 1;

  // velocidad inicial orbital
  earth.velocity = new BABYLON.Vector3(
    0, 
    0, 
    0.02
);

  return earth;
};
