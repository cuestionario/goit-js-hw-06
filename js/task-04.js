let counterValue = 0;

const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');

const counterValueElement = document.getElementById('value');

function updateCounterValue() {
    counterValueElement.textContent = counterValue;
}

decreaseBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
});

increaseBtn.addEventListener("click", () => {
    counterValue += 1;
    updateCounterValue();
});

updateCounterValue();
