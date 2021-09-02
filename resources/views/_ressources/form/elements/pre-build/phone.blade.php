{{-- https://developers.google.com/web/fundamentals/design-and-ux/input/forms?hl=fr#recommended_input_name_and_autocomplete_attribute_values --}}
<div class="field @if(!empty($changeFilled)) change-filled @endif">
    <label class="label" for="intl-tel-input">
        @if(!empty($changeFilled)) <span>
            @endif
            {{$label}}
            @if(!empty($changeFilled)) </span>
        @endif
    </label>
    <div class="control">
        <input class="input" id="intl-tel-input" type="tel" placeholder="" name="phone" data-init-value="" data-init-country="" @if(!empty($required)) required="phone" @if(!empty($errorMsg))  data-error-msg="{{$errorMsg}}" @endif data-error-location="#phoneErrorMsgLocation" @endif>
        <input id="intl-tel-input-country-code" type="tel" name="countryCode" hidden>
        <input id="intl-tel-input-full-number-less" type="tel" name="fullNumberLess" hidden>
    </div>
    @if(!empty($required) || !empty($infos))
    <div class="input-infos content">
        @if( !empty($infos))<p>{{$infos}}</p>
        @endif
        <div class="error-msg" id="phoneErrorMsgLocation">
        </div>
    </div>
    @endif
</div>
