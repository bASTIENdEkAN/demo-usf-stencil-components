<div class="field @if(!empty($floatLabel)) field--float-label @endif">
    <label class="label" for="email">
        @if(!empty($floatLabel)) <span>
            @endif
            {{$label}}
            @if(!empty($floatLabel)) </span>
        @endif
    </label>
    <div class="control">
        <input id="email" class="input" type="email" @if(!empty($placeholder) ) placeholder="{{$placeholder}}" @endif name="email" @if(!empty($required)) required="email" @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif data-error-location="#emailErrorMsgLocation" @endif >
    </div>
    @if(!empty($required) || !empty($help))
    <div class="input-help">
        @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
        <div class="input-help__el suggestion-msg" id="suggestionEmail" data-sentence-pt1="Vous voulez dire " data-sentence-pt2=" ?"></div>
        <div class="input-help__el error-msg" id="emailErrorMsgLocation">
        </div>
     </div>
    @endif
</div>
