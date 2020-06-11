<div class="control">
    <label class="checkbox @if(!empty($isFloat)) is-float @endif" for="{{$name}}">

        <input id="{{$name}}" type="checkbox" name="{{$name}}" value="y" @if(!empty($required)) data-required data-error-msg="{{$errorMsg}}" data-error-location="#{{$name}}ErrorMsgLocation" @endif/>
        <div class="checkbox-el">
            <svg class="svg" width="30px" height="33px" viewBox="0 0 29 33" version="1.1">
                <path class="check" d="M2,17.5610067 C4.57726298,22.0960586 8.8415437,28.5923861 11.5465427,32 C13.9489473,28.7350443 24.8513771,8.00656811 28,1"></path>
            </svg>
        </div>

        <div class="content">
            {!!$label!!}
        </div>

    </label>


    @if(!empty($required) || !empty($infos))
    <div class="radio-infos content">
       @if( !empty($infos))<p>{{$infos}}</p>@endif
       <div class="error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif

</div>
