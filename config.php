<?php

return [
    'production' => false,
    'siteName' => 'DanHolloran',
    'siteDescription' => 'My adventures on and off of the internetz.',
    'siteAuthor' => 'Dan Holloran',
    'resumeUrl' => '/files/danholloran-resume.pdf?v=4',
    'instagram' => collect([
        'link' => 'https://www.instagram.com/dholloran85/',
        'username' => 'dholloran85',
    ]),
    'twitter' => collect([
        'link' => 'https://twitter.com/dholloran',
        'username' => 'dholloran',
    ]),
    'youTube' => collect([
        'link' => 'https://www.youtube.com/c/DannyHolloran1',
        'username' => 'DannyHolloran1',
    ]),
    'gitlab' => collect([
        'link' => 'https://gitlab.com/DHolloran',
        'username' => 'DHolloran',
    ]),
    'github' => collect([
        'link' => 'https://github.com/dholloran',
        'username' => 'dholloran',
    ]),
    'linkedIn' => collect([
        'link' => 'https://www.linkedin.com/in/dan-holloran/',
        'username' => 'dan-holloran',
    ]),
    // collections
    'collections' => [
        'posts' => [
            'author' => 'Dan Holloran', // Default author, if not provided in a post
            'sort' => '-date',
            'path' => 'blog/{date|Y/m/d}/{filename}',
            'authorImageSrcSmall' => '//www.gravatar.com/avatar/' . md5("dtholloran@gmail.com") . '?s=36',
        ],
        'projects' => [
            'sort' => '-date',
            'path' => 'projects/{filename}',
        ],
        'pages' => [
            'path' => '/',
            'sort' => 'sort_order',
        ],
        'badges' => [
            'sort' => '-earned',
        ],
        'experience' => [
            'sort' => 'sort_order',
        ],
        'skills' => [
            'sort' => 'sort_order',
        ],
        'books' => [
            'sort' => 'title',
        ],
        'instagram' => [
            'sort' => '-date',
        ],
        'youtube' => [
            'sort' => '-date',
        ],
        'twitter' => [
            'sort' => '-date',
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
    'getDate' => function ($page, $format = 'U') {
        return Datetime::createFromFormat($format, $page->date);
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
];
