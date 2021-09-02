<title>{{$title}}</title>
<meta name="description" content="{{$description}}">
<meta name="twitter:card" content="summary" />
<meta property="og:title" content="{{$title}}" />
<meta property="og:description" content="{{$description}}" />
<meta property="og:type" content="website" />
@if(!empty($image))
<meta property="og:image" content="../images/{{$image}}" /> {{-- best size is 1200 x 1200 --}}
@else
<!-- <meta property="og:image" content="/images/head/projectName_head_og-image.jpg" /> -->
@endif
<link rel="icon" href="../images/{{$favicon}}" type="image/png">

{{-- https://developers.facebook.com/docs/plugins/share-button/?locale=fr_FR --}}
{{-- https://developers.facebook.com/tools/debug/sharing --}}
{{-- href="http://twitter.com/share?url={{url()->current()}}" --}}