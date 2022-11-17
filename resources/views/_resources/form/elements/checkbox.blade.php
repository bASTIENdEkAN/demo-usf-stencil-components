<label class="checkbox @if(!empty($float)) checkbox--float @endif @if(!empty($button)) checkbox--button @endif" for="{{$name}}">
    <input 
        class="checkbox__input" 
        id="{{$name}}" 
        type="checkbox" 
        name="{{$name}}" 
        @if(!empty($required)) 
            required 
            data-error-location="#{{$name}}ErrorMsgLocation"
            @if(!empty($errorMsg)) 
                data-error-msg="{{$errorMsg}}" 
            @endif 
        @endif
        @if(!empty($requiredSet)) 
            data-error-location="#{{$errorLocation}}"
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


@if(!empty($required) || !empty($help))
<div class="input-help">
    @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
    <div class="input-help__el error-msg" id="{{$name}}ErrorMsgLocation">
    </div>
 </div>
@endif
