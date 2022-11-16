@if(empty($errorMsgTarget))
<label class="radio @if(!empty($button))radio--button @endif" for="{{$name.$value}}">
    <input class="radio__input" id="{{$name.$value}}" type="radio" value="{{$value}}" name="{{$name}}" @if(!empty($required)) required data-error-location="#{{$name}}ErrorMsgLocation" @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
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
@else
<div class="radio-infos content">
    @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
    <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
    </div>
</div>
@endif