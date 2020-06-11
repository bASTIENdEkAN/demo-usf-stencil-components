<div class="field @if(!empty($changeFilled)) change-filled @endif">
  <label class="label" for="birthday">
      @if(!empty($changeFilled)) <span> @endif
          {{$label}}
      @if(!empty($changeFilled)) </span> @endif
  </label>
  <div class="control">
    {{-- <input class="input" type="text" placeholder="dd/jj/aaaa" name="birthday" data-required="birthday"> --}}
    <div class="input is-birthday-master" data-min-age="17" data-max-age="120" data-required>
        <input id="day" type="tel" placeholder="JJ" data-error-msg="@lang('form.birthdayErrorMsg')" data-error-location="#birthdayErrorMsgLocation">
        <span class="slash is-first">/</span>
        <input id="month" type="tel" placeholder="MM">
        <span class="slash is-second">/</span>
        <input id="year" type="tel" placeholder="AAAA">

        <input hidden id="birthday" name="birthday" type="text">
    </div>

    <div class="input-infos content">
       @if(!empty($infos))
           <p>{{$infos}}</p>
       @endif
       <div class="error-msg" id="birthdayErrorMsgLocation">
       </div>
    </div>


  </div>
</div>
