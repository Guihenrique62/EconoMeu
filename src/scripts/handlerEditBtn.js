import fetchFinances from "./fetchFinances";
import renderFinances from "./renderFinances";
import totalValue from "./totalValue";


export default async function handlerEditBtn(ev){
    document.querySelector('.popup').style.display = 'flex';
    const btnId = ev.target.id;
    const form = document.querySelector('.edit-form');
    const section = document.querySelector('#finances-section');


    //GET do bd para carregar no formulario
    const response = await fetch(`http://localhost:3000/finances/${btnId}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         })
    const savedFinance = await response.json()
    
    //carrega as informações do get no form
    document.getElementById('namedit').value = savedFinance.name
    document.getElementById('valuedit').value = savedFinance.value
    document.getElementById('datedit').value = savedFinance.date


    //PUT no bd com os dados editados
    form.addEventListener('submit', async (ev)=>{
        ev.preventDefault();
        document.querySelectorAll('.finance-container').forEach((element)=>{
            section.removeChild(element)
         })

        const financeData = {
            name: document.getElementById('namedit').value,
            value: document.getElementById('valuedit').value,
            date: document.getElementById('datedit').value
         }
      
        await fetch(`http://localhost:3000/finances/${btnId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(financeData)
         })
         
         //reseta o form
         form.reset()

         //recarrega as transações na tela
         const finances = await fetch('http://localhost:3000/finances').then(res => res.json())
         finances.forEach(renderFinances);

         //retira o form da tela
         document.querySelector('.popup').style.display = 'none';

         location.reload()

         totalValue()
    })

}
