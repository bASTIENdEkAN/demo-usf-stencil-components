@if(empty($labelsValues))
    <label class="radio @if(!empty($block))is-block @endif" for="{{$name.$value}}">
        <input class="input-radio" id="{{$name.$value}}" type="radio" value="{{$value}}" name="{{$name}}" @if(!empty($required)) required data-error-location="#{{$name}}ErrorMsgLocation" @endif @if(!empty($errorMsg)) data-error-msg="{{$errorMsg}}" @endif/>
        <div class="radio-inner">
            @if(!empty($checkStyle))
                <span class="radio-check">
                    {{-- check #01 --}}
                    <svg class="check-svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="check-svg-path" d="M1.00098 4.104L5.54298 8.973L12.972 0.102997" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            @else
                <span class="radio-radio"></span>
            @endif
            <span calss="radio-label">{{$label}}</span>
        </div>
    </label>

    @if(!empty($required) || !empty($infos))
    <div class="radio-infos content">
        @if( !empty($infos))<p>{{$infos}}</p>@endif
        <div class="error-msg" id="{{$name}}ErrorMsgLocation">
        </div>
    </div>
    @endif
@else

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
                        {{-- check #01 --}}
                        <svg class="check-svg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="check-svg-path" d="M1.00098 4.104L5.54298 8.973L12.972 0.102997" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                @else
                    <span class="radio-radio"></span>
                @endif
                <span calss="radio-label">{{$item['label']}}</span>
            </div>
        </label>        
    @endforeach

    @if(!empty($required) || !empty($infos))
        <div class="radio-infos content">
            @if( !empty($infos))<p>{{$infos}}</p>@endif
            <div class="error-msg" id="{{$name}}ErrorMsgLocation">
            </div>
        </div>
    @endif

</div>
@endif