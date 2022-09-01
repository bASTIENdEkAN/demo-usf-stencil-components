<div class="radios">

    @if(!empty($label))
        <div class="radio-label">
            <p>{{$label}}</p>
        </div>
    @endif

    @foreach ($labelsValues as $item)
        <label class="radio" for="{{$name.$item['value']}}">
            <input class="input-radio" id="{{$name.$item['value']}}" type="radio" value="{{$item['value']}}" name="{{$name}}" @if(!empty($required)) required data-error-location="#{{$name}}ErrorMsgLocation" @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
            <div class="radio-inner">
                @if(!empty($checkStyle))
                    <span class="radio-check">
                        @include('_resources/form/elements/check',['check'=>1])
                    </span>
                @else
                    <span class="radio-radio">&nbsp;</span>
                @endif
                <span calss="radio-label">{{$item['label']}}</span>
            </div>
        </label>        
    @endforeach

    @if(!empty($required) || !empty($infos))
        <div class="radio-infos content">
            @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
            <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
            </div>
        </div>
    @endif

</div>