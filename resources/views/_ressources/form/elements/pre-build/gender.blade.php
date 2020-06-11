<div class="radios">

    <label class="radio" for="genderF">
        <input id="genderF" type="radio" value="F" name="gender" @if(!empty($required)) data-required data-error-msg="{{$errorMsg}}" data-error-location="#genderErrorMsgLocation" @endif/>
        <span class="radio-el"></span>
        <span>Homme</span>
    </label>

    <label class="radio" for="genderM">
        <input id="genderM" type="radio" value="M" name="gender" />
        <span class="radio-el"></span>
        <span>Femme</span>
    </label>

    @if(!empty($required) || !empty($infos))
    <div class="radio-infos content">
       @if( !empty($infos))<p>{{$infos}}</p>@endif
       <div class="error-msg" id="genderErrorMsgLocation">
       </div>
    </div>
    @endif

</div>
