@if($check == 1)
{{-- check #01 --}}
<svg class="check-svg is-1" width="14" height="12" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="check-svg-path" d="M1.00098 4.104L5.54298 8.973L12.972 0.102997" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
@elseif($check == 2)
{{-- check #02 --}}
<svg class="check-svg is-2" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="check-svg-path" d="M1 7.74695L4.12201 11.361L11.006 1" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
@elseif($check == 3)
{{-- check #03 --}}
<svg class="check-svg is-3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <path class="check-svg-path" fill="none" stroke="#000" stroke-linejoin="bevel" stroke-width="2" d="M0,5.6093478 C3.08367111,10.1165319 4.75542886,11.3949825 5.11258845,11.9296428 C5.68424982,11.0609112 8.06574811,8.21451283 12.3231523,0" transform="translate(.791 1.363)"/>
</svg>
@endif