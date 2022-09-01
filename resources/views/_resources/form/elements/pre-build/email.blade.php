<div class="field @if(!empty($changeFilled)) change-filled @endif">
    <label class="label" for="email">
        @if(!empty($changeFilled)) <span>
            @endif
            {{$label}}
            @if(!empty($changeFilled)) </span>
        @endif
    </label>
    <div class="control">
        <input id="email" class="input" type="email" @if(!empty($placeholder) ) placeholder="{{$placeholder}}" @endif name="email" @if(!empty($required)) required="email" @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif data-error-location="#emailErrorMsgLocation" @endif >
    </div>
    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
        @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
        <div class="info suggestion-msg" id="suggestionEmail" data-sentence-pt1="Vous voulez dire " data-sentence-pt2=" ?"></div>
        <div class="info error-msg" id="emailErrorMsgLocation">
        </div>
    </div>
    @endif
</div>
