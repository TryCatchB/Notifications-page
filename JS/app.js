import { choiseTemplate, fetchData } from "./functions.js";

fetchData().then((data) => choiseTemplate(data));
