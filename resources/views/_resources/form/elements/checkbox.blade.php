<label class="checkbox @if(!empty($float)) checkbox--float @endif @if(!empty($button)) checkbox--button @endif" for="{{$name}}">
    <input 
        class="checkbox__input" 
        id="{{$name}}" 
        type="checkbox" 
        name="{{$name}}" 
        @if(!empty($required)) 
            required 
            @if(!empty($errorMsg)) 
                data-error-msg="{{$errorMsg}}" 
            @endif 
        @endif
        @if(!empty($errorLocation)) 
            @if(!empty($required)) 
                data-error-location="#{{$name}}ErrorMsgLocation" 
            @else 
                data-error-location="#{{$errorLocation}}" 
            @endif 
        @endif 
        />

    <div class="checkbox__inner">
        <span class="checkbox__check">
            @include('_resources/form/elements/check',['check'=>1])
        </span>

        <span class="checkbox__label">
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
