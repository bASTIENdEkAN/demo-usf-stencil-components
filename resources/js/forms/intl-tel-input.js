import $ from "jquery";
import intlTelInput from 'intl-tel-input';

// import { parsePhoneNumberFromString } from 'libphonenumber-js'
let hashCountryDataTranslation = {};
if( $('html').attr('lang') == 'fr'){

    hashCountryDataTranslation = {"af":"Afghanistan (‫افغانستان‬‎)","al":"Albanie (Shqipëri)","dz":"Algérie (‫الجزائر‬‎)","as":"Samoa américaines (American Samoa)","ad":"Andorre (Andorra)","ao":"Angola","ai":"Anguilla","ag":"Antigua-et-Barbuda (Antigua and Barbuda)","ar":"Argentine (Argentina)","am":"Arménie (Հայաստան)","aw":"Aruba","au":"Australie (Australia)","at":"Autriche (Österreich)","az":"Azerbaïdjan (Azərbaycan)","bs":"Bahamas","bh":"Bahreïn (‫البحرين‬‎)","bd":"Bangladesh (বাংলাদেশ)","bb":"Barbade (Barbados)","by":"Biélorussie (Беларусь)","be":"Belgique (België)","bz":"Belize","bj":"Bénin","bm":"Bermudes (Bermuda)","bt":"Bhoutan (འབྲུག)","bo":"Bolivie (Bolivia)","ba":"Bosnie-Herzégovine (Босна и Херцеговина)","bw":"Botswana","br":"Brésil (Brasil)","io":"Territoire britannique de l’océan Indien (British Indian Ocean Territory)","vg":"Îles Vierges britanniques (British Virgin Islands)","bn":"Brunei","bg":"Bulgarie (България)","bf":"Burkina Faso","bi":"Burundi (Uburundi)","kh":"Cambodge (កម្ពុជា)","cm":"Cameroun","ca":"Canada","cv":"Cap-Vert (Kabu Verdi)","bq":"Bonaire, Saint-Eustache et Saba (Caribbean Netherlands)","ky":"Îles Caïmans (Cay Islands)","cf":"République centrafricaine","td":"Tchad","cl":"Chili (Chile)","cn":"Chine (中国)","co":"Colombie (Colombia)","km":"Comores (‫جزر القمر‬‎)","cd":"République démocratique du Congo (Jamhuri ya Kidemokrasia ya Kongo)","cg":"République du Congo / (Congo) (Congo-Brazzaville)","ck":"Îles Cook (Cook Islands)","cr":"Costa Rica","ci":"Côte d’Ivoire","hr":"Croatie (Hrvatska)","cu":"Cuba","cw":"Curaçao","cy":"Chypre (Κύπρος)","cz":"République tchèque (Česká republika)","dk":"Danemark (Danmark)","dj":"Djibouti","dm":"Dominique (Dominica)","do":"République dominicaine (República Dominicana)","ec":"Équateur (Ecuador)","eg":"Égypte (‫مصر‬‎)","sv":"Salvador (El Salvador)","gq":"Guinée équatoriale (Guinea Ecuatorial)","er":"Érythrée (Eritrea)","ee":"Estonie (Eesti)","et":"Éthiopie (Ethiopia)","fk":"Îles Malouines (Islas Malvinas)","fo":"Îles Féroé (Føroyar)","fj":"Fidji (Fiji)","fi":"Finlande (Suomi)","fr":"France","gf":"Guyane (Guyane française)","pf":"Polynésie française","ga":"Gabon","gm":"Gambie (Gambia)","ge":"Géorgie (საქართველო)","de":"Allemagne (Deutschland)","gh":"Ghana (Gaana)","gi":"Gibraltar","gr":"Grèce (Ελλάδα)","gl":"Groenland (Kalaallit Nunaat)","gd":"Grenade (Grenada)","gp":"Guadeloupe","gu":"Guam","gt":"Guatemala","gn":"Guinée","gw":"Guinée-Bissau (República da Guiné-Bissau)","gy":"Guyana","ht":"Haïti (Haiti)","hn":"Honduras","hk":"Hong Kong (香港)","hu":"Hongrie (Magyarország)","is":"Islande (Ísland)","in":"Inde (भारत)","id":"Indonésie (Indonesia)","ir":"Iran (‫ایران‬‎)","iq":"Irak (‫العراق‬‎)","ie":"Irlande (Ireland)","il":"Israël (‫ישראל‬‎)","it":"Italie (Italia)","jm":"Jamaïque (Jamaica)","jp":"Japon (日本)","jo":"Jordanie (‫الأردن‬‎)","kz":"Kazakhstan (Казахстан)","ke":"Kenya","ki":"Kiribati","kw":"Koweït (‫الكويت‬‎)","kg":"Kirghizistan (Кыргызстан)","la":"Laos (ລາວ)","lv":"Lettonie (Latvija)","lb":"Liban (‫لبنان‬‎)","ls":"Lesotho","lr":"Liberia","ly":"Libye (‫ليبيا‬‎)","li":"Liechtenstein","lt":"Lituanie (Lietuva)","lu":"Luxembourg","mo":"Macao (澳門)","mk":"Macédoine (Македонија)","mg":"Madagascar (Madagasikara)","mw":"Malawi","my":"Malaisie (Malaysia)","mv":"Maldives","ml":"Mali","mt":"Malte (Malta)","mh":"Marshall (Marshall Islands)","mq":"Martinique","mr":"Mauritanie (‫موريتانيا‬‎)","mu":"Maurice (Moris)","mx":"Mexique (México)","fm":"Micronésie (Micronesia)","md":"Moldavie (Republica Moldova)","mc":"Monaco","mn":"Mongolie (Монгол)","me":"Monténégro (Crna Gora)","ms":"Montserrat","ma":"Maroc (‫المغرب‬‎)","mz":"Mozambique (Moçambique)","mm":"Birmanie (မြန်မာ)","na":"Namibie (Namibië)","nr":"Nauru","np":"Népal (नेपाल)","nl":"Pays-Bas (Nederland)","nc":"Nouvelle-Calédonie","nz":"Nouvelle-Zélande (New Zealand)","ni":"Nicaragua","ne":"Niger (Nijar)","ng":"Nigeria","nu":"Niue","nf":"Île Norfolk (Norfolk Island)","kp":"Corée du Nord (조선 민주주의 인민 공화국)","mp":"Îles Mariannes du Nord (Northern Mariana Islands)","no":"Norvège (Norge)","om":"Oman (‫عُمان‬‎)","pk":"Pakistan (‫پاکستان‬‎)","pw":"Palaos (Palau)","ps":"Autorité palestinienne (‫فلسطين‬‎)","pa":"Panama (Panamá)","pg":"Papouasie-Nouvelle-Guinée (Papua New Guinea)","py":"Paraguay","pe":"Pérou (Perú)","ph":"Philippines","pl":"Pologne (Polska)","pt":"Portugal","pr":"Porto Rico (Puerto Rico)","qa":"Qatar (‫قطر‬‎)","re":"La Réunion","ro":"Roumanie (România)","ru":"Russie (Россия)","rw":"Rwanda","bl":"Saint-Barthélemy","sh":"Sainte-Hélène, Ascension et Tristan da Cunha (Saint Helena)","kn":"Saint-Christophe-et-Niévès (Saint Kitts and Nevis)","lc":"Sainte-Lucie (Saint Lucia)","mf":"Saint-Martin (Antilles françaises) (partie française))","pm":"Saint-Pierre-et-Miquelon","vc":"Saint-Vincent-et-les-Grenadines (Saint Vincent and the Grenadines)","ws":"Samoa","sm":"Saint-Marin (San Marino)","st":"Sao Tomé-et-Principe (São Tomé e Príncipe)","sa":"Arabie saoudite (‫المملكة العربية السعودية‬‎)","sn":"Sénégal","rs":"Serbie (Србија)","sc":"Seychelles","sl":"Sierra Leone","sg":"Singapour (Singapore)","sx":"Saint-Martin (Sint Maarten)","sk":"Slovaquie (Slovensko)","si":"Slovénie (Slovenija)","sb":"Salomon (Solomon Islands)","so":"Somalie (Soomaaliya)","za":"Afrique du Sud (South Africa)","kr":"Corée du Sud (대한민국)","ss":"Soudan du Sud (‫جنوب السودان‬‎)","es":"Espagne (España)","lk":"Sri Lanka (ශ්‍රී ලංකාව)","sd":"Soudan (‫السودان‬‎)","sr":"Suriname","sz":"Swaziland","se":"Suède (Sverige)","ch":"Suisse (Schweiz)","sy":"Syrie (‫سوريا‬‎)","tw":"Taïwan / (République de Chine (Taïwan)) (台灣)","tj":"Tadjikistan (Tajikistan)","tz":"Tanzanie (Tanzania)","th":"Thaïlande (ไทย)","tl":"Timor oriental (Timor-Leste)","tg":"Togo","tk":"Tokelau","to":"Tonga","tt":"Trinité-et-Tobago (Trinidad and Tobago)","tn":"Tunisie (‫تونس‬‎)","tr":"Turquie (Türkiye)","tm":"Turkménistan (Turkmenistan)","tc":"Îles Turques-et-Caïques (Turks and Caicos Islands)","tv":"Tuvalu","vi":"Îles Vierges des États-Unis (U.S. Virgin Islands)","ug":"Ouganda (Uganda)","ua":"Ukraine (Україна)","ae":"Émirats arabes unis (‫الإمارات العربية المتحدة‬‎)","gb":"Royaume-Uni (United Kingdom)","us":"États-Unis (United States)","uy":"Uruguay","uz":"Ouzbékistan (Oʻzbekiston)","vu":"Vanuatu","va":"État de la Cité du Vatican (Città del Vaticano)","ve":"Venezuela","vn":"Viêt Nam (Việt Nam)","wf":"Wallis-et-Futuna (Wallis and Futuna)","ye":"Yémen (‫اليمن‬‎)","zm":"Zambie (Zambia)","zw":"Zimbabwe"};
}else{
    hashCountryDataTranslation = {'be':'België'};
}




if($("#intl-tel-input").length >=1){

    const input = document.querySelector("#intl-tel-input");
    //
    const lang = input.dataset.lang
    let preferredCountries = ['be','nl','lu'];

    if( lang == 'nl_nl'){
        preferredCountries = ['nl','be','lu'];
    }
    //
    let iti = intlTelInput(input,{

        preferredCountries: preferredCountries,
        separateDialCode: true,
        localizedCountries: hashCountryDataTranslation,
        hiddenInput: "full_number",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.0/js/utils.js",
        // utilsScript: "~intl-tel-input/src/js/utils.js",
        customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        return selectedCountryPlaceholder;
    },


    });

    const $input = $("#intl-tel-input");

    let phoneNumberValue = $input.attr('data-init-value');
    let phoneCountryIso = $input.attr('data-init-country');

    if(phoneNumberValue){
        $input.val(phoneNumberValue);
    }
    if(phoneCountryIso){
        iti.setCountry(phoneCountryIso);
    }
    // const pl = $input.css('paddingLeft');
    // const label = $input.parents('.field').find('label');
    //
    // label.css({'padding-left':pl})

    let getCode = iti.getSelectedCountryData();

    const $form = $('form');


    $form.on('submit', function(){
        let getCode = iti.getSelectedCountryData();
            $('#intl-tel-input-country-code').val(''+getCode.dialCode+'');
            $('#intl-tel-input-full-number-less').val(''+iti.getNumber().replace('+','')+'');
            // $('#intl-tel-input-full-number-less').val(''+iti.getNumber().replace('+'+getCode.dialCode,'')+'');
    });
    //FUCKING NEW DESIGN!!

}
