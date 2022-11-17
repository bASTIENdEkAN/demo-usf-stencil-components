<div class="field @if(!empty($floatLabel)) field--float-label @endif">
    <div class="control">
        <label class="label" for="{{$name}}">
            @if(!empty($floatLabel)) <span> @endif
                {{$label}}
            @if(!empty($floatLabel)) </span> @endif
        </label>
        <div class="select">
            <select id="{{$name}}" name="{{$name}}" @if(!empty($required)) required @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#{{$name}}ErrorMsgLocation" @endif>
                @if(!empty($floatLabel))
                    <option selected></option>
                @else
                    <option disabled selected>Placeholder</option>
                @endif
                <option>options 1</option>
                <option>options 2</option>
                <option>options 3</option>
            </select>
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
