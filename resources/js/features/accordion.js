const accodrions = document.querySelectorAll('.accordion');

const selectorAllRemoveClass = (element,array) =>{
    const elements = document.querySelectorAll(element);
    elements.forEach(element =>{
        element.classList.remove(array);    
    })
};

accodrions.forEach( accordion =>{
    
    const cta = accordion.querySelector('.accordion__head');
    const panel = accordion.querySelector('.accordion__body');
    const allPanels = document.querySelectorAll('.accordion__body');

    panel.style.height = '0px';

    cta.addEventListener('click', (e)=>{
        const panelHeight = panel.querySelector('.accordion__content').offsetHeight;
        const isActive = accordion.classList.contains('accordion--active');

        allPanels.forEach(allPanel =>{
            allPanel.style.height = '0px';
        })

        if(!isActive){
            selectorAllRemoveClass('.accordion','accordion--active');
            accordion.classList.add('accordion--active');
            panel.style.height = panelHeight+'px';
        }else{
            accordion.classList.remove('accordion--active');
            panel.style.height = '0px';
        }
    })

})