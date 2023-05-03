const btnEl = document.getElementById('calculate')
const billAmount = document.getElementById("bill")
const tipEl = document.getElementById("tip")
const totalSpan = document.getElementById('total')

const calculateTotal = () => {
    const billValue = billAmount.value
    const tipValue = tipEl.value
    const totalValue = billValue * ( 1 + tipValue / 100)
    totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal)