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
        @if(!empty($type)) type="{{$type}}" @else type="text" @endif
        @if(!empty($placeholder)) placeholder="{{$placeholder}}" @endif
        @if(!empty($required)) 
            @if($required === true ) required @else required="{{$required}}" @endif
            data-error-location="#{{$name}}ErrorMsgLocation" @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif
        @endif>
  </div>

  @if(!empty($required) || !empty($help))
  <div class="input-help">
     @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
     <div class="input-help__el error-msg" id="{{$name}}ErrorMsgLocation">
     </div>
  </div>
  @endif

</div>
