const btn = document.querySelector('.submit');
const state1 = document.querySelector('.state1');
const state2 = document.querySelector('.state2');
const given_note = document.querySelector('.given-note');

btn.addEventListener('click', checkButton);

function checkButton(event) {
    event.preventDefault();
    state1.classList.add('disabled');
    state2.classList.add('active');
    var inputs = document.querySelectorAll('.rates');
    let i = 0;
    let rate = '';
    for (i; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
            rate = inputs[i].value;
        }
    }
    console.log(rate);
    given_note.innerHTML = `<p>You selected ${rate} out of 5</p>`
}
