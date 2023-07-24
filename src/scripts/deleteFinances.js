export default async function deleteFinances(ev){
    const btnId = ev.target.id;

    //DELETE do bd para carregar no formulario
    const response = await fetch(`http://localhost:3000/finances/${btnId}`, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json'
            }
         })
    const savedFinance = await response.json()
    location.reload()
}