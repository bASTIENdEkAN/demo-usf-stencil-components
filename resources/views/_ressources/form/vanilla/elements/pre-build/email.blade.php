<div class="field @if(!empty($changeFilled)) change-filled @endif">
    <label class="label" for="email">
        @if(!empty($changeFilled)) <span>
            @endif
            {{$label}}
            @if(!empty($changeFilled)) </span>
        @endif
    </label>
    <div class="control">
        <input id="email" class="input" type="email" @if(!empty($placeholder) ) placeholder="{{$placeholder}}" @endif name="email" @if(!empty($required)) required="email"data-error-location="#emailErrorMsgLocation" @endif @if(!empty(errorMsg)) data-error-msg="{{$errorMsg}}" @endif>
    </div>
    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
        @if( !empty($infos))<p>{{$infos}}</p>
        @endif
        <p id="suggestionEmail" class="has-text-black" data-sentence-pt1="Vous voulez dire " data-sentence-pt2=" ?"></p>
        <div class="error-msg" id="emailErrorMsgLocation">
        </div>
    </div>
    @endif
</div>
