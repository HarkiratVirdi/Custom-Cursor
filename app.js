const cursor = document.querySelector('.cursor');
const img = document.querySelector('img');
const links = document.querySelectorAll('li a');

links.forEach(elem => {
    elem.addEventListener('mouseenter', function(e){
        cursor.classList.add('huge');
    })

elem.addEventListener('mouseleave', function(e){
    cursor.classList.remove('huge');
})

});


document.body.addEventListener('mousemove', function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});




img.addEventListener('mousemove', function(e){
    
});

img.addEventListener('mouseleave', function(e){
    cursor.style.borderColor = 'black';
    
});
