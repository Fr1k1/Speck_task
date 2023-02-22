const input = document.getElementById("input_field");


document.querySelector("#add_button").addEventListener("click", function () {
    const newTechnology = document.createElement('div');
    newTechnology.innerText = input.value;
    document.body.appendChild(newTechnology).classList.add("new_item");
    input.value = '';
})


document.querySelector("#remove_button").addEventListener("click", function () {
    const divs = document.querySelectorAll('div.new_item'); //get all divs that have class new_item
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }

})