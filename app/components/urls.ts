import blue from "./Imgs/backgrounds/blue50.png";
import green from "./Imgs/backgrounds/green50.png";
import yellow from "./Imgs/backgrounds/yellow50.png";
import grey from "./Imgs/backgrounds/grey70.png";
import darkblue from "./Imgs/backgrounds/darkblue50.png";
import red from "./Imgs/backgrounds/red50.png";

export const backgrounds = { blue, green, yellow, grey, darkblue, red };

import Default from "./Imgs/hair/default.png";
import Curls from "./Imgs/hair/curls.png";
import Bang from "./Imgs/hair/bang.png";
import Elegant from "./Imgs/hair/elegant.png";
import Fancy from "./Imgs/hair/fancy.png";
import Short from "./Imgs/hair/short.png";

export const hair = { Default, Curls, Bang, Elegant, Fancy, Short };

import DefaultEye from "./Imgs/eyes/default.png";
import Angry from "./Imgs/eyes/angry.png";
import Naughty from "./Imgs/eyes/naughty.png";
import Panda from "./Imgs/eyes/panda.png";
import Smart from "./Imgs/eyes/smart.png";
import Star from "./Imgs/eyes/star.png";

export const eye = { DefaultEye, Angry, Naughty, Panda, Smart, Star };

import DefaultEar from "./Imgs/ears/default.png";
import EarBackward from "./Imgs/ears/tilt-backward.png";
import EarForward from "./Imgs/ears/tilt-forward.png";

export const ear = { DefaultEar, EarBackward, EarForward };

import DefaultMouth from "./Imgs/mouth/default.png";
import Astonished from "./Imgs/mouth/astonished.png";
import Eating from "./Imgs/mouth/eating.png";
import Laugh from "./Imgs/mouth/laugh.png";
import Tongue from "./Imgs/mouth/tongue.png";

export const mouths = { DefaultMouth, Astonished, Eating, Laugh, Tongue };

import DefaultLeg from './Imgs/leg/default.png'
import BubbleTea from './Imgs/leg/bubble-tea.png'
import Cookie from './Imgs/leg/cookie.png'
import GameConsole from './Imgs/leg/game-console.png'
import LegBackward from './Imgs/leg/tilt-backward.png'
import LegForward from './Imgs/leg/tilt-forward.png'

export const leg = {DefaultLeg, BubbleTea, Cookie, GameConsole, LegBackward, LegForward}

import Earings from './Imgs/accessories/earings.png'
import Flower from './Imgs/accessories/flower.png'
import Glasses from './Imgs/accessories/glasses.png'
import Headphone from './Imgs/accessories/headphone.png'

export const Accessories = {Earings, Flower, Glasses, Headphone}

import DefaultNeck from './Imgs/neck/default.png'
import Thick from './Imgs/neck/thick.png'
import NeckForward from './Imgs/neck/bend-forward.png'
import NeckBackward from './Imgs/neck/bend-backward.png'

export const neck = {DefaultNeck, Thick, NeckForward, NeckBackward}


import DefaultNose from './Imgs/nose.png'
export const nose = {DefaultNose}

export const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomBackground = () => getRandomItem(Object.values(backgrounds));
export const getRandomHair = () => getRandomItem(Object.values(hair));
export const getRandomEyes = () => getRandomItem(Object.values(eye));
export const getRandomEars = () => getRandomItem(Object.values(ear));
export const getRandomMouth = () => getRandomItem(Object.values(mouths));
export const getRandomLeg = () => getRandomItem(Object.values(leg));
export const getRandomAccessories = () => getRandomItem(Object.values(Accessories));
export const getRandomNeck = () => getRandomItem(Object.values(neck));
export const getRandomNose = () => getRandomItem(Object.values(nose));