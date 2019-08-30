@php
$full_width = $page->getPath() === '';
@endphp
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="preconnect" href="https://www.google-analytics.com" crossorigin>
        {{-- Start - Global site tag (gtag.js) - Google Analytics --}}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-64998225-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-64998225-1');
        </script>
        {{-- End - Global site tag (gtag.js) - Google Analytics --}}

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="{{ $page->meta_description ?? $page->siteDescription }}">

        {{-- Start Open Graph --}}
        <meta property="og:title" content="{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ $page->getUrl() }}"/>
        <meta property="og:description" content="{{ $page->siteDescription }}" />
        @if($page->cover_image)
            <meta property="og:image" content="{{ $page->cover_image }}" />
        @endif
        {{-- End Open Graph --}}

        {{-- Start Twitter Card --}}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dholloran" />
        <meta name="twitter:creator" content="@dholloran" />
        <meta name="twitter:title" content="{{ $page->title ?? $page->siteTitle }}" />
        @if($page->cover_image)
            <meta name="twitter:image" content="{{ $page->cover_image }}" />
        @endif
        <meta name="twitter:description" content="{{ $page->meta_description ?? $page->siteDescription }}" />
        {{-- End Twitter Card --}}

        <title>{{ $page->siteName }}{{ $page->title ? ' | ' . $page->title : '' }}</title>

        <link rel="home" href="{{ $page->baseUrl }}">
        <link rel="icon" href="/favicon.ico">
        <link rel="alternate" type="application/rss+xml" title="DanHolloran" href="https://danholloran.me/feed.xml">

        @stack('meta')

        @if ($page->production)
            <!-- Insert analytics code here -->
        @endif

        <link rel="preload" href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap" rel="stylesheet" as="style" onload="this.rel='stylesheet'">
        <link rel="preload" href="{{ mix('css/main.css', 'assets/build') }}"  as="style" onload="this.rel='stylesheet'">
    </head>

    <body>
        <div id="app" class="flex flex-col justify-between min-h-screen bg-white text-gray-800 leading-normal font-sans antialiased">
            <header class="flex items-center h-24 py-4" role="banner">
                <div class="container flex items-center max-w-8xl mx-auto px-4 lg:px-8">
                    <div class="flex items-center">
                        <a href="/" title="{{ $page->siteName }} home" class="inline-flex items-center">
                            <h1 class="text-lg md:text-2xl text-indigo-800 font-semibold hover:text-indigo-700 my-0">{{ $page->siteName }}</h1>
                        </a>
                    </div>

                    <div id="vue-search" class="flex flex-1 justify-end items-center">
                        <search></search>

                        @include('_nav.social')
                        {{-- @include('_nav.menu') --}}

                        {{-- @include('_nav.menu-toggle') --}}
                    </div>
                </div>
            </header>

            {{-- @include('_nav.menu-responsive') --}}

            <main role="main" class="flex-auto w-full {{ $full_width ? '' : 'container max-w-4xl mx-auto px-6' }} py-16">
                @yield('body')
            </main>

            <footer class="bg-white text-center text-sm mt-12 py-4" role="contentinfo">
                <ul class="flex flex-col md:flex-row justify-center list-reset">
                    <li class="md:mr-2">
                        &copy; Dan Holloran {{ date('Y') }}.
                    </li>

                    <li>
                        Built with <a href="http://jigsaw.tighten.co" title="Jigsaw by Tighten" target="_blank" rel="noopener noreferrer">Jigsaw</a>, <a href="https://vuejs.org/" target="_blank"  rel="noopener noreferrer">Vue.js</a>
                        and <a href="https://tailwindcss.com" title="Tailwind CSS, a utility-first CSS framework" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>.
                    </li>
                </ul>
            </footer>
        </div>

        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>

        @stack('scripts')
    </body>
</html>
