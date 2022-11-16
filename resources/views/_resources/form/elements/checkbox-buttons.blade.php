<div class="field">

    @if(!empty($label))
        <div class="label">
            <p>{{ $label }}</p>
        </div>
    @endif
    
    <div>
        <div class="checkboxes-button" data-required-set data-error-msg="Error msg motorization">
            @foreach ($labelsValues as $item)
                {{-- <label class="checkbox-button" for="{{$name.'_'.$item['name']}}">
                    <input class="checkbox-button__input" id="{{$name.'_'.$item['name']}}" type="checkbox" name="{{$name.'_'.$item['name']}}" @if(!empty(true)) data-error-location="#{{$name}}ErrorMsgLocation" @endif/>
                    <div class="checkbox-button__inner">
                        <span class="checkbox-button__label">
                            {{ $item['label'] }}
                        </span>
                        <span class="checkbox-button__check">
                            @include('_resources/form/elements/check',['check'=>1])
                        </span>
                    </div>
                </label> --}}
                @include('_resources/form/elements/checkbox-button',[
                    'label'=>$item['label'],
                    'name'=>$name.'_'.$item['name']
                ])
            @endforeach
        </div>
    </div>

    @if(!empty($required) || !empty($infos))
        <div class="input-infos content">
            @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
            <div class="info error-msg error-msg--has-set" id="{{$name}}ErrorMsgLocation">
            </div>
        </div>
    @endif

</div>