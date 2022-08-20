const jeepImage = document.getElementById('jeep');
const btn = document.getElementById('btn');
const listItems = document.querySelectorAll('li');

btn.addEventListener('click', (e) => {
    if(jeepImage.getAttribute('src') === './assets/images/jeep1.jpg') {
        jeepImage.setAttribute('src', './assets/images/jeep2.jpg');
        btn.innerHTML = 'Show Jeep 1';
    } else {
        jeepImage.setAttribute('src', './assets/images/jeep1.jpg')
        btn.innerHTML = 'Show Jeep 2';
    }
});

listItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.innerHTML = 'clicked'
    })
})