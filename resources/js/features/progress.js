import anime from 'animejs';

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

const progresses = document.querySelectorAll('progress');

progresses.forEach((progress,index)=>{
    
    const id = ID();
    progress.setAttribute('id',id);

    const from = progress.value;
    const to = parseInt(progress.getAttribute('data-anim-to'));

    if(to){
        
        anime({
            targets: '#'+id,
            value: to,
            easing: 'easeInOutQuad',
            autoplay: true,
        });

    }
    
});