<title>{{$title}}</title>
<meta name="description" content="{{$description}}">
<meta name="twitter:card" content="summary" />
<meta property="og:title" content="{{$title}}" />
<meta property="og:description" content="{{$description}}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:image" content="{{url('images/'.$image.'')}}" /> {{-- best size is 1200 x 1200 --}}
<link rel="icon" href="{{url('images/'.$favicon.'')}}" type="image/png">

{{-- https://developers.facebook.com/docs/plugins/share-button/?locale=fr_FR --}}
{{-- https://developers.facebook.com/tools/debug/sharing --}}

{{-- href="http://twitter.com/share?url={{url()->current()}}" --}}
