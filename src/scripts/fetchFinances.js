import renderFinances from "./renderFinances";

export default async function fetchFinances(){
   const finances = await fetch('http://localhost:3000/finances').then(res => res.json())
   finances.forEach(renderFinances);
}