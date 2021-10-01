const button = document.querySelector('button')
const body = document.querySelector('body')
const input = document.querySelector('input').value
const p = document.querySelector('p')


button.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log(input);
    fetch(`https://api.weatherapi.com/v1/current.json?key=7afdf2afd0444951a2c145143211907&q=${input}&aqi=no`)
    .then(response => {
       console.log(response);
        // p.value = response;
    })
    .catch(err => console.log(err))
})