const btnSiwtchTypes = document.querySelectorAll('.input-switch-type');

btnSiwtchTypes.forEach( btnSiwtchType =>{
  let input = btnSiwtchType.closest('.control').querySelector('.input');

  const displayTheGoodLabel = () =>{
    if(input.getAttribute('type') == 'password'){
      btnSiwtchType.querySelector('.display').style.display = 'block';
      btnSiwtchType.querySelector('.hide').style.display = 'none';
    }else{
      btnSiwtchType.querySelector('.display').style.display = 'none';
      btnSiwtchType.querySelector('.hide').style.display = 'block';
    }
  };
  displayTheGoodLabel();
  

  btnSiwtchType.addEventListener('click',(e)=>{
    if(input.getAttribute('type') == 'password'){
      input.setAttribute('type','text');
    }else{
      input.setAttribute('type','password');
    }
    input.focus();
    displayTheGoodLabel();
  });

});