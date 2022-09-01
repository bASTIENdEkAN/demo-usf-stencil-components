<div class="control">
    <label class="checkbox @if(!empty($isFloat)) is-float @endif" for="{{$name}}">
        <input class="input-checkbox" id="{{$name}}" type="checkbox" name="{{$name}}" value="y" @if(!empty($required)) required @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#{{$name}}ErrorMsgLocation" @endif/>
        <div class="checkbox-inner">
            <span class="checkbox-check">
                @include('_resources/form/elements/check',['check'=>1])
            </span>

            <span class="checkbox-label">
                {!!$label!!}
            </span>
        </div>

    </label>


    @if(!empty($required) || !empty($infos))
    <div class="checkbox-infos content">
       @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
       <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif

</div> 