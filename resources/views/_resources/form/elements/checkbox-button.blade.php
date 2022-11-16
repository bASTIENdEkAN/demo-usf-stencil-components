<label class="checkbox-button @if(!empty($isFloat)) checkbox-button--float @endif" for="{{$name}}">
    <input class="checkbox-button__input" id="{{$name}}" type="checkbox" name="{{$name}}" @if(!empty(false)) required @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#{{$name}}ErrorMsgLocation" @endif/>
    <div class="checkbox-button__inner">
        <span class="checkbox-button__label">
            {!!$label!!}
        </span>
        <span class="checkbox-button__check">
            @include('_resources/form/elements/check',['check'=>1])
        </span>
    </div>
</label>