---
pagination:
  collection: posts
  perPage: 10
---
@extends('_layouts.master')

@push('meta')
<meta property="og:title" content="{{ $page->siteName }} Blog" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ $page->getUrl() }}" />
<meta property="og:description" content="The list of blog posts for {{ $page->siteName }}" />
@endpush

@section('body')
<div class="max-w-6xl mx-auto px-6">
    <h1>Blog</h1>

    <hr class="border-b my-6">

    <div class="flex -mx-6 flex-wrap">
        @foreach ($pagination->items as $post)
        <div class="md:w-1/2 px-6">
            @include('_components.post-preview-inline')
        </div>
        @endforeach
    </div>

    @include('_components.newsletter-signup')

    @if ($pagination->pages && $pagination->pages->count() > 1)
    <nav class="flex text-base my-8">
        @if ($previous = $pagination->previous)
        <a href="{{ $previous }}" title="Previous Page"
            class="bg-gray-200 hover:bg-gray-400 rounded mr-3 px-5 py-3">&LeftArrow;</a>
        @endif

        @foreach ($pagination->pages as $pageNumber => $path)
        <a href="{{ $path }}" title="Go to Page {{ $pageNumber }}"
            class="bg-gray-200 hover:bg-gray-400 text-primary-700 rounded mr-3 px-5 py-3 {{ $pagination->currentPage == $pageNumber ? 'text-primary-600' : '' }}">{{ $pageNumber }}</a>
        @endforeach

        @if ($next = $pagination->next)
        <a href="{{ $next }}" title="Next Page"
            class="bg-gray-200 hover:bg-gray-400 rounded mr-3 px-5 py-3">&RightArrow;</a>
        @endif
    </nav>
    @endif
</div>
@stop
