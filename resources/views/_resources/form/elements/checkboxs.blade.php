<div class="field">

    @if(!empty($label))
        <div class="label">
            <p>{{ $label }}</p>
        </div>
    @endif
    
    <div>
        <div class="checkboxs @if(!empty($button)) checkboxs--tile @endif" @if(!empty($required)) data-required-set data-error-msg="{{$errorMsg}}" @endif>
            @foreach ($labelsValues as $item)
                @include('_resources/form/elements/checkbox',
                [
                    'label'=>$item['label'],
                    'name'=>$name.'_'.$item['name'],
                    'button'=>$button,
                    'required'=>false,
                    'errorLocation'=>$name.'ErrorMsgLocation'
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