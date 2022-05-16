import { Grossefonction as api } from "./api.js";
let popo = api()

const tableau = document.getElementById('plateau')

tableau.innerHTML(popo)