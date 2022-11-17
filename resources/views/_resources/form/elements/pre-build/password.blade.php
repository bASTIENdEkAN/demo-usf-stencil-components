<div class="field @if(!empty($floatLabel)) field--float-label @endif">

    <label class="label" for="{{$name}}">
        @if(!empty($floatLabel)) <span> @endif
            {{$label}}
        @if(!empty($floatLabel)) </span> @endif
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

    @if(!empty($required) || !empty($help))
    <div class="input-help">
        @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
        <div class="input-help__el error-msg" id="{{$name}}ErrorMsgLocation">
        </div>
     </div>
    @endif

</div>
  