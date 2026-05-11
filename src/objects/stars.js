import * as BABYLON from "@babylonjs/core";

export const createStars = (scene) => {
  const stars = BABYLON.MeshBuilder.CreateSphere(
    "stars",
    { diameter: 1000 },
    scene,
  );

  const material = new BABYLON.StandardMaterial("starsMat", scene);

  material.emissiveTexture = new BABYLON.Texture("/textures/stars.jpg", scene);

  material.backFaceCulling = false;

  material.disableLighting = true;

  stars.material = material;

  return stars;
};
