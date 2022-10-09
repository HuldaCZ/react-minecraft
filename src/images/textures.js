import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images.js";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;

groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;

groundTexture.magFilter = NearestFilter;



export { dirtTexture, grassTexture, glassTexture, woodTexture, logTexture, groundTexture };
