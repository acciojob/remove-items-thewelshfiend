//your JS code here. If required.
let arr = [`Red`, `Green`, `White`, `Black`];
const selection = document.getElementById("colorSelect");
renderDropDown();
const options = selection.getElementsByTagName("option");
const button = document.querySelector("input");

function renderDropDown()
{
    selection.innerHTML = ``;   // Resets the list before rendering it
    for (let color of arr)
    {
        selection.innerHTML += `<option value=${color}>${color}</option>`;
    }
    return;
}

button.addEventListener("click", selectAndRemove);
function selectAndRemove()
{
    const color = selection.value;
    arr = arr.filter(item => item != color);
    renderDropDown();
    return;
}