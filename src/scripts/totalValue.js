export default async function totalValue(){
    const resposta = await fetch(`http://localhost:3000/finances`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            }
         })
    const savedFinance = await resposta.json()
    
    console.log(savedFinance)

    const arraySum = []

    for(let i = 0;i<savedFinance.length;i++){
        arraySum.push(parseFloat(savedFinance[i].value))
       
    }

    const sum = arraySum.reduce((a, b) => a+b)
    const spam = document.getElementById('acountValue')
    spam.textContent = `R$ ${sum.toFixed(2)}`
    if(sum >= 0){
        spam.classList.add('positive')
        spam.classList.remove('negative')

    }else{
        spam.classList.add('negative')
        spam.classList.remove('positive')
    }
}