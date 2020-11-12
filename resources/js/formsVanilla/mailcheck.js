// import $ from "jquery";

import Mailcheck from 'mailcheck';


if(document.querySelector('#email')){
    // console.log('sdfds');
    let $email = document.querySelector('#email');
    let $suggestion = document.querySelector('#suggestionEmail');
    let $suggestionSentencePt1 = document.querySelector('#suggestionEmail').getAttribute('data-sentence-pt1');
    let $suggestionSentencePt2 = document.querySelector('#suggestionEmail').getAttribute('data-sentence-pt2');


    let domains = ['gmail.com', 'hotmail.com', 'outlook.com'];
    let secondLevelDomains = ['gmail','hotmail','outlook'];
    let topLevelDomains = ["com", "be", "nl", "fr", "lu", "eu", "info", "net", "org", "online", "vlaanderen", "immo", "store", "design", "world", "tech", "website", "de", "brussels", "digital", "pro", "rocks", "live", "amsterdam", "ch", "uk"];

    let mailCheckRun = () => {

           Mailcheck.run({
             email: $email.value,
             domains: domains,                       // optional
             topLevelDomains: topLevelDomains,       // optional
             secondLevelDomains: secondLevelDomains, // optional
             // distanceFunction: superStringDistance,  // optional
             suggested: function(suggestion) {
               // callback code

               window.mailcheck.push($email.value);
               // console.log(window.mailcheck)
               // console.log($email.value)
               // console.log(window.mailcheck.length)

               $suggestion.innerHTML = ""+ $suggestionSentencePt1 +" <b><i>" + suggestion.full + "</b></i> "+$suggestionSentencePt2+"";
             },
             empty: function() {
               // callback code
               $suggestion.innerHTML = "";
             }
           });

    }

    $email.addEventListener("keyup", mailCheckRun);
    $email.addEventListener("keydown", mailCheckRun);
}
