<div class="field">

    @if(!empty($label))
        <div class="label">
            <p>{{ $label }}</p>
        </div>
    @endif
    
    <div>
        <div class="checkboxs @if(!empty($button)) checkboxs--tile @endif" @if(!empty($required)) data-required-set  @if(!empty($errorMsg))data-error-msg="{{$errorMsg}}"@endif @endif>
            @foreach ($labelsValues as $item)
                @include('_resources/form/elements/checkbox',
                [
                    'label'=>$item['label'],
                    'name'=>$name.'_'.$item['name'],
                    'button'=>$button,
                    'help'=>false,
                    'required'=>false,
                    'requiredSet'=>$required,
                    'errorLocation'=>$name.'ErrorMsgLocation'
                ])
            @endforeach
        </div>
    </div>

    @if(!empty($required) || !empty($help))
        <div class="input-help">
            @if( !empty($help))<div class="input-help__el"><p>{{$help}}</p></div>@endif
            <div class="input-help__el error-msg error-msg--has-set" id="{{$name}}ErrorMsgLocation">
            </div>
        </div>
    @endif

</div>