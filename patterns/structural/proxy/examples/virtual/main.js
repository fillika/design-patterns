// This example shows us example of 'Virtual' proxy.
// LazyImage is a virtual proxy and it looks like a normal Image
// but it provides us a behaviour that we expected

const Image = require("./image");
const LazyImage = require("./lazyImage");
const drawImage = require("./utils/image/drawImage");

let charizardImg = new Image("http://pokemon.com/charizard.png");
drawImage(charizardImg);

let pikachuImg = new LazyImage("http://pokemon.com/pikachu.png");
drawImage(pikachuImg);
