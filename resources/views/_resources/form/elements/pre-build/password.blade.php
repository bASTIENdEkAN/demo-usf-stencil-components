<div class="field @if(!empty($changeFilled)) change-filled @endif">

    <label class="label" for="{{$name}}">
        @if(!empty($changeFilled)) <span> @endif
            {{$label}}
        @if(!empty($changeFilled)) </span> @endif
    </label>
    <div class="control">
        <input id="{{$name}}"
            class="input"
            name="{{$name}}"
            type="password"
            @if(!empty($placeholder)) placeholder="{{$placeholder}}" @endif
            @if(!empty($required)) 
                @if(!empty($match))  required="{{$required}}" data-match="{{$match}}" @else required @endif
                data-error-location="#{{$name}}ErrorMsgLocation" @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif
            @endif>

            <div class="input-switch-type">
                <span class="display">Afficher</span><span class="hide">Masquer</span>
            </div>
    </div>

    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
       @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
       <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif

</div>
  