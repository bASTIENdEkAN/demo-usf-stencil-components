const accodrions = document.querySelectorAll('.accordion');

const selectorAllRemoveClass = (element,array) =>{
    const elements = document.querySelectorAll(element);
    elements.forEach(element =>{
        element.classList.remove(array);    
    })
};

accodrions.forEach( accordion =>{
    
    const cta = accordion.querySelector('.accordion-head');
    const panel = accordion.querySelector('.accordion-content');
    const allPanels = document.querySelectorAll('.accordion-content');

    panel.style.height = '0px';

    cta.addEventListener('click', (e)=>{
        const panelHeight = panel.querySelector('.container').offsetHeight;
        const isActive = accordion.classList.contains('is-active');

        allPanels.forEach(allPanel =>{
            allPanel.style.height = '0px';
        })

        if(!isActive){
            selectorAllRemoveClass('.accordion','is-active');
            accordion.classList.add('is-active');
            panel.style.height = panelHeight+'px';
        }else{
            accordion.classList.remove('is-active');
            panel.style.height = '0px';
        }
    })

})