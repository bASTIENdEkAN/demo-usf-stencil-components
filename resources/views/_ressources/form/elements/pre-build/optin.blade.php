<div class="control">
    <label class="checkbox @if(!empty($isFloat)) is-float @endif" for="{{$name}}">
        <input class="input-checkbox" id="{{$name}}" type="checkbox" name="{{$name}}" value="y" @if(!empty($required)) required @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#{{$name}}ErrorMsgLocation" @endif/>
        <span class="checkbox-check">
            {{-- check #01 --}}
            <svg class="check-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="check-svg-path" d="M1.00098 4.104L5.54298 8.973L12.972 0.102997" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{-- check #02 --}}
            {{-- 
            <svg class="check-svg" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="check-svg-path" d="M1 7.74695L4.12201 11.361L11.006 1" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            --}}
            {{-- check #03 --}}
            {{-- 
            <svg class="check-svg" width="30px" height="33px" viewBox="0 0 29 33" version="1.1">
                <path class="check-svg-path" d="M2,17.5610067 C4.57726298,22.0960586 8.8415437,28.5923861 11.5465427,32 C13.9489473,28.7350443 24.8513771,8.00656811 28,1"></path>
            </svg> 
            --}}
        </span>

        <span class="content">
            {!!$label!!}
        </span>

    </label>


    @if(!empty($required) || !empty($infos))
    <div class="radio-infos content">
       @if( !empty($infos))<p>{{$infos}}</p>@endif
       <div class="error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif

</div>
