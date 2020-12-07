<div class="field @if(!empty($changeFilled)) change-filled @endif">
    <label class="label" for="{{$name}}">
        @if(!empty($changeFilled)) <span> @endif
            {{$label}}
        @if(!empty($changeFilled)) </span> @endif
    </label>
    <div class="control">
        <div class="select2-container">
            <select class="select2 @if(!empty($classes)) {{$classes}} @endif" @if(empty($changeFilled)) data-placeholder="{{$placeholder}}" @endif id="{{$name}}" name="{{$name}}" @if(!empty($required)) data-required data-error-msg="{{$errorMsg}}" data-error-location="#{{$name}}ErrorMsgLocation" @endif>
                @if(!empty($changeFilled))
                    <option disabled selected></option>
                @else
                    <option disabled selected></option>
                @endif
                <option>options 1</option>
                <option>options 2</option>
                <option>options 3</option>
            </select>
        </div>
    </div>


    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
       @if( !empty($infos))<p>{{$infos}}</p>@endif
       <div class="error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif

</div>
