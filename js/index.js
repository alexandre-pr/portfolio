

$(function(){
    $("#loaded_header").load("header.html"); 
    $("#loaded_footer").load("footer.html"); 
});

const aboutBlock = document.getElementById('about');
const skillsBlock = document.getElementById('skills');
const educationBlock = document.getElementById('education');

window.onscroll = function(){
    var headerBlock = document.getElementsByTagName('header')[0];
    var top = window.scrollY + headerBlock.offsetHeight;
    console.log('Top: ' + top);
    if((top > aboutBlock.offsetTop && top<skillsBlock.offsetTop)||(top>educationBlock.offsetTop)){
        document.body.classList.add('light-background');
    } else {
        document.body.classList.remove('light-background');
            }
};