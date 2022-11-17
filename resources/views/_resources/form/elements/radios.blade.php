<div class="field">

    @if(!empty($label))
        <div class="label">
            <p>{{$label}}</p>
        </div>
    @endif
    <div class="radios @if(!empty($button)) radios--tile @endif">
        {{-- @if(!empty($required)) data-required-set @if(!empty($errorMsg))data-error-msg="{{$errorMsg}}"@endif @endif --}}
        @foreach ($labelsValues as $item)   
            @include('_resources/form/elements/radio',[
                        'label'=>$item['label'],
                        'value'=>$item['value'],
                        'required'=>false,
                        'help'=>false,
                        'requiredSet'=>$required,
                        'name'=>$name,
                        'button'=>$button,
                    ])
        @endforeach
    </div>

    @if(!empty($required) || !empty($help))
        <div class="input-help">
            @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
            <div class="input-help__el error-msg" id="{{$name}}ErrorMsgLocation">
            </div>
        </div>
    @endif

</div>