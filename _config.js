import lume from "lume/mod.ts";
const site = lume();

// Copy the "img" directory to _site/img
site.copy("img");

// use Open Innovations charting viz https://open-innovations.github.io/oi-lume-viz/
import oiCharts from 'oi-lume-charts/mod.ts';
site.use(oiCharts({
  assetPath: 'assets/oi',
  componentNamespace: 'oi',
}));

export default site;
