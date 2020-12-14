const dynamicSelects = document.querySelectorAll('.select-dynamic select');

dynamicSelects.forEach(dynamicSelect => {
    dynamicSelect.addEventListener('change',()=>{
        let url = dynamicSelect.value; // get selected value
        if (url) { // require a URL
            window.location.href = url; // redirect
            // alert(window.location)
            return false;
        }
        
    })
})