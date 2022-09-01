<div class="steps-line-container" data-steps="{{$currentStep}}" data-half="true">


    <ul class="steps-line steps-line--name">

        @for($i = 1 ; $i <= $steps; $i++)
        <li class="steps-line__el">
            Step name {{$i}}
        </li>
        @endfor
    </ul>

    <ul class="steps-line steps-line--dots">

        @for($i = 1 ; $i <= $steps; $i++)
        <li class="steps-line__el is-active">
            <div class="steps-line__dots"></div>
        </li>
        @endfor
    </ul>


</div>
