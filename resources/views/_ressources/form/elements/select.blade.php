<div class="field @if(!empty($changeFilled)) change-filled @endif">
    <div class="control">
        <label class="label" for="{{$name}}">
            @if(!empty($changeFilled)) <span> @endif
                {{$label}}
            @if(!empty($changeFilled)) </span> @endif
        </label>
        <div class="select is-fullwidth">
            <select id="{{$name}}" name="{{$name}}" @if(!empty($required)) required @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#{{$name}}ErrorMsgLocation" @endif>
                @if(!empty($changeFilled))
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


    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
       @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
       <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
       </div>
    </div>
    @endif

</div>
