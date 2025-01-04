// Generador de sidemap

const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Define las rutas de tu sitio web
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/Planes/PlanSolucion.html", changefreq: "weekly", priority: 0.8 },
  {
    url: "/Planes/PlanTranquilidad.html",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    url: "/Planes/PlanSatisfaccion.html",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    url: "/AcercaDeNosotros.html",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    url: "/Contacto.html",
    changefreq: "monthly",
    priority: 0.6,
  },
];

// Crear un flujo para el sitemap
const sitemap = new SitemapStream({
  hostname: "https://wilgrey2004.github.io/LOGUZ/Planes/PlanSatisfaccion.html",
});

// Guardar el sitemap en un archivo
const writeStream = createWriteStream("./sitemap.xml");
sitemap.pipe(writeStream);

// Añadir las rutas al sitemap
links.forEach((link) => sitemap.write(link));

// Finalizar y cerrar el flujo
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log("Sitemap generado exitosamente."))
  .catch((err) => console.error("Error generando el sitemap:", err));
