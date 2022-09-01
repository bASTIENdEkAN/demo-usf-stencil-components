@if(empty($errorMsgTarget))
<label class="radio @if(!empty($block))is-block @endif" for="{{$name.$value}}">
    <input class="input-radio" id="{{$name.$value}}" type="radio" value="{{$value}}" name="{{$name}}" @if(!empty($required)) required data-error-location="#{{$name}}ErrorMsgLocation" @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
    <div class="radio-inner">
        @if(!empty($checkStyle))
            <span class="radio-check">
                @include('_resources/form/elements/check',['check'=>1])
            </span>
        @else
            <span class="radio-radio">&nbsp;</span>
        @endif
        <span calss="radio-label">{{$label}}</span>
    </div>
</label>
@else
<div class="radio-infos content">
    @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
    <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
    </div>
</div>
@endif