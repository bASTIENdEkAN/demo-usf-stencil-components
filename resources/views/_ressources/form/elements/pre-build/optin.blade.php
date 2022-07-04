<div class="control">
    <label class="checkbox @if(!empty($isFloat)) is-float @endif" for="{{$name}}">
        <input class="input-checkbox" id="{{$name}}" type="checkbox" name="{{$name}}" value="y" @if(!empty($required)) required @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#{{$name}}ErrorMsgLocation" @endif/>
        <div class="checkbox-inner">
            <span class="checkbox-check">
                @include('_ressources/form/elements/check',['check'=>1])
            </span>

            <span class="checkbox-label">
                {!!$label!!}
            </span>
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