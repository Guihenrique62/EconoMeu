import renderFinances from "./renderFinances"
import totalValue from "./totalValue"

export default async function postFinances(ev){
   const form = document.getElementById('form')
   ev.preventDefault()

   const financeData = {
      name: document.getElementById('name').value,
      value: document.getElementById('value').value,
      date: document.getElementById('date').value
   }

   const response = await fetch('http://localhost:3000/finances', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(financeData)
   })

   const savedFinance = await response.json()
   form.reset()
   renderFinances(savedFinance)
   totalValue()
}