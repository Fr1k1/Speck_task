const input=document.getElementById("input_field");


document.querySelector("#add_button").addEventListener("click", function() {
    const newDiv = document.createElement('div');
    newDiv.innerText = input.value;
    document.body.appendChild(newDiv).classList.add("new_item");
    input.value = '';
})


document.querySelector("#remove_button").addEventListener("click", function() {
    const divs = document.querySelectorAll('div.new_item');
    divs.forEach(function(div) {
        div.remove();
      });

})