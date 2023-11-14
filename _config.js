import lume from "lume/mod.ts";

const site = lume();

// Copy the "img" directory to _site/img
site.copy("img");

export default site;
