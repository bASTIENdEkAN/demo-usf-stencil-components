
<label class="radio @if(!empty($button))radio--button @endif" for="{{$name.$value}}">
    <input 
        class="radio__input" 
        id="{{$name.$value}}" 
        type="radio" 
        value="{{$value}}" 
        name="{{$name}}" 
        @if(!empty($required)) 
            required 
            data-error-location="#{{$name}}ErrorMsgLocation" 
            @if(!empty($errorMsg)) 
                data-error-msg="{{$errorMsg}}"
            @endif
        @endif 
        @if(!empty($requiredSet)) 
            required 
            data-error-location="#{{$name}}ErrorMsgLocation" 
            @if(!empty($errorMsg)) 
                data-error-msg="{{$errorMsg}}"
            @endif
        @endif 
        />
 
    <div class="radio__inner">
        @if(!empty($check))
            <span class="radio__check">
                @include('_resources/form/elements/check',['check'=>1])
            </span>
        @else
            <span class="radio__radio"></span>
        @endif
        <span calss="radio__label">{{$label}}</span>
    </div>
</label>

@if(!empty($required) || !empty($help))
<div class="input-help">
    @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
    <div class="input-help__el error-msg" id="{{$name}}ErrorMsgLocation">
    </div>
 </div>
@endif
