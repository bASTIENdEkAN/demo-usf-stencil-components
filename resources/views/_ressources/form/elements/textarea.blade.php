<div class="field has-textarea @if(!empty($changeFilled)) change-filled @endif">
    <label class="label" for="{{$name}}">
        @if(!empty($changeFilled)) <span> @endif
            {{$label}}
        @if(!empty($changeFilled)) </span> @endif
    </label>
    <div class="control">
      <textarea id="{{$name}}"
          class="textarea"
          name="{{$name}}"
            @if(!empty($placeholder)) placeholder="{{$placeholder}}" @endif
            @if(!empty($required)) 
                @if($required === true ) required @else required="{{$required}}" @endif
                data-error-location="#{{$name}}ErrorMsgLocation" data-error-msg="{{$errorMsg}}" 
            @endif></textarea>
    </div>
  
    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
       @if( !empty($infos))<p>{{$infos}}</p>@endif
       <div class="error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif
  
  </div>
  