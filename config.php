<?php

use Illuminate\Support\Carbon;

return [
    'baseUrl' => 'https://danholloran.test',
    'production' => false,
    'siteDescription' => 'Generate an elegant blog with Jigsaw',
    'siteName' => 'DanHolloran',
    'siteDescription' => 'My adventures on and off of the internetz.',
    'siteAuthor' => 'Dan Holloran',

    // collections
    'collections' => [
        'posts' => [
            'author' => 'Author Name', // Default author, if not provided in a post
            'sort' => '-date',
            'path' => 'blog/{date|Y/m/d}/{filename}',
            'authorImageSrcSmall' => '//www.gravatar.com/avatar/' . md5("dtholloran@gmail.com") . '?s=36',
            'authorImageSmallSize' => 36,
        ],
        'categories' => [
            'path' => '/blog/categories/{filename}',
            'posts' => function ($page, $allPosts) {
                return $allPosts->filter(function ($post) use ($page) {
                    return $post->categories ? in_array($page->getFilename(), $post->categories, true) : false;
                });
            },
        ],
    ],

    // helpers
    'getDate' => function ($page) {
        return Datetime::createFromFormat('U', $page->date);
    },
    'getExcerpt' => function ($page, $length = 255) {
        $content = $page->excerpt ?? $page->getContent();
        $cleaned = strip_tags(
            preg_replace(['/<pre>[\w\W]*?<\/pre>/', '/<h\d>[\w\W]*?<\/h\d>/'], '', $content),
            '<code>'
        );

        $truncated = substr($cleaned, 0, $length);

        if (substr_count($truncated, '<code>') > substr_count($truncated, '</code>')) {
            $truncated .= '</code>';
        }

        return strlen($cleaned) > $length
            ? preg_replace('/\s+?(\S+)?$/', '', $truncated) . '...'
            : $cleaned;
    },
    'isActive' => function ($page, $path) {
        return ends_with(trimPath($page->getPath()), trimPath($path));
    },
    'metaDescription' => function ($page) {
        $excerpt = str_replace("\n", '', $page->excerpt(160, ''));
        $excerpt = trim($excerpt);

        return $excerpt ?: $page->siteDescription;
    },
    'featuredImageSrc' => function ($page, $fallback = '') {
        return $page->image['featured'] ?? $fallback;
    },
];
