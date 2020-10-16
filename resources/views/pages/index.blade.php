@extends('layouts/default')

@section('content')
<header class="wrapper has-background-light">
    <div class="container py-1">
         {{-- Main container --}}
        <nav class="level is-mobile">
            {{-- Left side --}}
            <ul class="level-left">
                <li class="level-item">
                    <p class="text">
                        <strong>R+S</strong> STARTER
                    </p>
                </li>
            </ul>

            {{-- Right side --}}
            <ul class="level-right">
                <li class="level-item">
                    @include('_ressources/elements/select-lang')
                </li>
            </ul>
        </nav>
        {{--/ Main container --}}
    </div>
</header>


<div class="wrapper">

    <div class="container is-small pt-4 pb-1">
        @include ('_ressources/components/steps-line',
                        [
                            'currentStep'=>'5',
                            'steps'=>'5',
                        ])
    </div>
</div>


<div class="wrapper">
    <div class="container is-small py-4">
        <h1 class="title">Formu template</h1>
        <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo qui! Atque distinctio enim nihil, numquam, odit autem voluptatem corporis modi officia voluptate explicabo totam soluta. Dolorum veniam quibusdam consequatur.</p>
        </div>
        {{-- FORM --}}
        {{-- @include('_ressources/formVanilla/form') --}}
        <form action="" class="form-validation" novalidate>
            <span>Name</span>
            <input data-validate-length-range="6" data-validate-words="2" name="name" required="required" />
            <span>Occupation</span>
            <input data-validate-length-range="5,15" name="occupation" type="text" />
            <span>Email</span>
            <input name="email" required="required" type="email" class="email" />
            <span>Confirm Email address</span>
            <input data-validate-linked="email" type="email" class='email' name="confirm_email" required="required">
            <span>Number</span>
            <input data-validate-minmax="10,100" type="number" name="number" required='required'>

            <button type="submit">SUBMIT</button>
        </form>
        {{-- <div class="form-container">

            <form class="form-validation" novalidate method="post">
              <input type="hidden"/>
              <div class="form-group">
                  <label>Username (required)</label>
                  <input type="text" required data-pristine-required-message="Please choose a username" class="form-control" />
              </div>

              <div class="form-group">
                  <label>ZIP code</label>
                  <input type="text" data-pristine-pattern="/^[0-9]{5}(?:-[0-9]{4})?$/" data-pristine-pattern-message="Invalid ZIP code" class="form-control" value="123"/>
              </div>

              <div class="form-group">
                  <label>Your age (required, min. 14)</label>
                  <input type="number" min="14" data-pristine-min-message="You must be at least 14-years-old" required class="form-control" value="10" />
              </div>
              <div class="form-group">
                  <label>Password (required)</label>
                  <input type="password" id="pwd"  required data-pristine-required-message="Please choose a password" data-pristine-pattern= "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/" data-pristine-pattern-message="Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number" class="form-control" />
                (see <a href="https://stackoverflow.com/questions/19605150" target="_blank">here</a> other password patterns.)
              </div>
              <div class="form-group">
                  <label>Retype password</label>
                  <input type="password" data-pristine-equals="#pwd" data-pristine-equals-message="Passwords don't match" class="form-control" />
              </div>
              <div class="form-group inline-label">
                  <input id="ch1" type="checkbox" name="future" required data-pristine-required-message="You must accept the terms and conditions"/>
                  <label for="ch1">I accept the terms  and conditions (required)</label><br/>
              </div>
              <div class="form-group">
                  <input type="submit" value="Submit" class="btn"/>
              </div>
            </form>
            </div> --}}
        {{--/ FORM --}}
    </div>

</div>


<div class="wrapper has-background-white-bis">
    <div class="container is-medium py-8">

        <ul class="list-faq">

        @for($i=1;$i<5;$i++)
            <li class="el">
                @include('_ressources/components/accordion',
                            [
                                'question'=>'Question '.$i,
                                'answer'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            ])
            </li>
        @endfor

        </ul>

    </div>
</div>

<footer class="footer">
    <div class="footer-container">

        <nav class="level">

            <ul class="level-left">
                <li class="level-item">
                    <a class="link" href="#">
                        Legal
                    </a>
                </li>
                <li class="level-item">
                    <a class="link" href="#">
                        Privacy
                    </a>
                </li>
                <li class="level-item">
                    <a class="link" href="#">
                        Coockies
                    </a>
                </li>
            </ul>


            <ul class="level-right">
                <li class="level-item">
                    <p class="text ">
                        <strong>© R+S 2020 - 2021</strong>
                    </p>
                </li>
            </ul>
        </nav>

    </div>
</footer>


@endsection
