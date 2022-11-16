<div class="radios">

    @if(!empty($label))
        <div class="radio-label">
            <p>{{$label}}</p>
        </div>
    @endif
        {{-- BASTIEN!! --}}
    <div class="radios radios--tile">
        @foreach ($labelsValues as $item)   
            @include('_resources/form/elements/radio',[
                        'label'=>$item['label'],
                        'value'=>$item['value'],
                        'name'=>$name,
                    ])
        @endforeach
    </div>

    @if(!empty($required) || !empty($infos))
        <div class="radio-infos content">
            @if( !empty($infos))<div class="info"><p>{{$infos}}</p></div>@endif
            <div class="info error-msg" id="{{$name}}ErrorMsgLocation">
            </div>
        </div>
    @endif

</div>