import * as BABYLON from "@babylonjs/core";

const G = 0.000001;

export const applyGravity = (planet, sun) => {
  const direction = sun.position.subtract(planet.position);

  const distance = direction.length();

  if (distance < 2) return;

  direction.normalize();

  const force = (G * sun.mass * planet.mass) / (distance * distance);

  const acceleration = direction.scale(force / planet.mass);

  // velocidad MUY suave
  planet.velocity.addInPlace(acceleration);

  // movimiento suave
  planet.position.addInPlace(planet.velocity.scale(0.1));
};
