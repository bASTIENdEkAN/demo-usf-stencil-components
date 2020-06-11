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
        @if(!empty($type)) type="{{$type}}" @else type="text" @endif
        @if(!empty($placeholder)) placeholder="{{$placeholder}}" @endif
        @if(!empty($required)) data-required data-error-location="#{{$name}}ErrorMsgLocation" data-error-msg="{{$errorMsg}}" @endif>
  </div>

  @if(!empty($required) || !empty($infos))
  <div class="input-infos content">
     @if( !empty($infos))<p>{{$infos}}</p>@endif
     <div class="error-msg" id="{{$name}}ErrorMsgLocation">
     </div>
  </div>
  @endif

</div>
