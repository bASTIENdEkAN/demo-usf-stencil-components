@if(!empty($block))

    <label class="radio is-block" for="{{$name}}{{$value}}">
        <input id="{{$name}}{{$value}}" type="radio" value="{{$value}}" name="{{$name}}" @if(!empty($required)) required data-error-location="#{{$name}}ErrorMsgLocation" @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
        <span class="radio-el">&nbsp</span>
        <span>{{$label}}</span>
    </label>

    @if(!empty($required) || !empty($infos))
        <div class="radio is-infos">
            <div class="radio-infos content">
                @if( !empty($infos))<p>{{$infos}}</p>@endif
                <div class="error-msg" id="{{$name}}ErrorMsgLocation">
                </div>
            </div>
        </div>
    @endif

@else
<div class="radios">

    @if(!empty($label))
        <div class="radio is-label">
            <p>{{$label}}</p>
        </div>
    @endif

    @if(!empty($label1))
        <label class="radio" for="{{$name}}{{$value1}}">
            <input id="{{$name}}{{$value1}}" type="radio" value="{{$value1}}" name="{{$name}}" @if(!empty($required)) required data-error-location="#{{$name}}ErrorMsgLocation" @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
            <span class="radio-el">&nbsp</span>
            <span>{{$label1}}</span>
        </label>
    @endif
    
    @if(!empty($label2))
        <label class="radio" for="{{$name}}{{$value2}}">
            <input id="{{$name}}{{$value2}}" type="radio" value="{{$value2}}" name="{{$name}}"  @if(!empty($required)) required @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
            <span class="radio-el">&nbsp</span>
            <span>{{$label2}}</span>
        </label>
    @endif

    @if(!empty($label3))
        <label class="radio" for="{{$name}}{{$value3}}">
            <input id="{{$name}}{{$value3}}" type="radio" value="{{$value3}}" name="{{$name}}" @if(!empty($required)) required @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
            <span class="radio-el">&nbsp</span>
            <span>{{$label3}}</span>
        </label>
    @endif
    
    @if(!empty($label4))
        <label class="radio" for="{{$name}}{{$value4}}">
            <input id="{{$name}}{{$value4}}" type="radio" value="{{$value4}}" name="{{$name}}" @if(!empty($required)) required @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
            <span class="radio-el">&nbsp</span>
            <span>{{$label4}}</span>
        </label>
    @endif

    @if(!empty($required) || !empty($infos))
        <div class="radio is-infos">
            <div class="radio-infos content">
                @if( !empty($infos))<p>{{$infos}}</p>@endif
                <div class="error-msg" id="{{$name}}ErrorMsgLocation">
                </div>
            </div>
        </div>
    @endif

</div>
@endif