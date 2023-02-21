<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />

    @include('head/head', [
        'title' => 'Demo Usefull Stencil Components',
        'description' => 'Demo of the npm package "usf-stencil-components"',
        'favicon' => 'project-name_head_favicon.png',
    ])

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="notification is-link is-light mb-0">
        <div>
            <h3 class="title is-size-5 mb-1">Demo notification message</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto eos aperiam magnam error id
                doloremque cumque sapiente sed recusandae fugit accusantium qui, omnis voluptatibus delectus, porro
                suscipit! Eos.</p>
            <p>Sit amet consectetur adipisicing elit. Architecto eos aperiam sed recusandae fugit accusantium qui, iure
                reprehenderit omnis voluptatibus delectus, porro suscipit! Eos.</p>
        </div>
    </div>
    
    @include('components/usf-sticky-header')
    @include('components/usf-modal')

    <div class="container is-fluid">
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body">
                <div class="container has-text-centered"><button class="button is-link is-medium"
                        id="open-modal-btn">Open modal</button></div>
            </div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
        <div class="hero is-large has-background-white-ter my-6">
            <div class="hero-body"></div>
        </div>
    </div>

    <footer class="footer has-background-white-ter">
        <div class="content has-text-centered">
            <p>
                <strong>Usefull components</strong> by <a href="https://github.com/bASTIENdEkAN">Bastien De Kan</a>.
            </p>
        </div>
    </footer>

    <script type="module" src="../js/app.js"></script>
    <script>
        // Header
        const header = document.querySelector('usf-sticky-header');

        const buttons_behavior = document.querySelectorAll('.button-header-behavior');

        const button_behavior_a = document.querySelector('#button-header-behavior-a');
        const behavior_a = {
            threshold: 600,
            gluedStart: true,
            gluedActive: true,
        }

        const button_behavior_b = document.querySelector('#button-header-behavior-b');
        const behavior_b = {
            threshold: 600,
            gluedStart: false,
            gluedActive: true,
        }

        const button_behavior_c = document.querySelector('#button-header-behavior-c');
        const behavior_c = {
            threshold: 600,
            gluedStart: false,
            gluedActive: false,
        }

        const button_behavior_d = document.querySelector('#button-header-behavior-d');
        const behavior_d = {
            threshold: 600,
            gluedStart: true,
            gluedActive: false,
        }

        const activeButton = (node) => {
            buttons_behavior.forEach((button, index) => {
                if (!button.classList.contains('is-light')) button.classList.add('is-light');
            });
            node.classList.remove('is-light');
        }

        const setHeaderOnClick = (button, obj) => {
            button.addEventListener('click', (e) => {
                activeButton(button);
                let behavior = obj;
                header.threshold = behavior.threshold;
                if (behavior.gluedStart) header.setAttribute('glued-start', '')
                else header.removeAttribute('glued-start');
                if (behavior.gluedActive) header.setAttribute('glued-active', '')
                else header.removeAttribute('glued-active');
            });
        };

        setHeaderOnClick(button_behavior_a, behavior_a);
        setHeaderOnClick(button_behavior_b, behavior_b);
        setHeaderOnClick(button_behavior_c, behavior_c);
        setHeaderOnClick(button_behavior_d, behavior_d);

        // Modal
        const openModalBtn = document.querySelector('#open-modal-btn');
        const modal = document.querySelector('usf-modal');
        openModalBtn.addEventListener('click', () => {
            if (!modal.opened) {
                modal.open();
            }
        });

        const closeModal = document.querySelectorAll('.close-modal');
        closeModal.forEach((item) => {
            item.addEventListener('click', () => {
                if (modal.open) {
                    modal.close();
                }
            });
        });

        // Not important, it's juste for the bulma header in mobile
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });

        });
    </script>
</body>

</html>
