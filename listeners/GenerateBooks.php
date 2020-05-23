<?php

namespace App\Listeners;

use Zttp\ZttpResponse;
use Illuminate\Support\Str;
use App\Support\RSSGenerator;
use Illuminate\Support\Collection;

class GenerateBooks extends RSSGenerator
{
    protected function groups(): Collection
    {
        return collect([
            'currently-reading',
            'read',
        ]);
    }

    protected function formatItem(Collection $item, string $group): Collection
    {
        return collect([
            'author_name' => $item->get('author_name'),
            'title' => $item->get('title'),
            'link' => $item->get('link'),
            'image_url' => $item->get('book_image_url'),
            'small_image_url' => $item->get('book_small_image_url'),
            'medium_image_url' => $item->get('book_medium_image_url'),
            'large_image_url' => $item->get('book_large_image_url'),
            'body' => $item->get('book_description'),
            'slug' => Str::slug($item->get('title')),
            'date' => $item->get('pubDate'),
            'group' => $group,
        ]);
    }

    protected function collectionName(): string
    {
        return 'books';
    }

    protected function convertResponseToItems(ZttpResponse $response): Collection
    {
        $xml = $response->body();
        $xml = simplexml_load_string($xml, \SimpleXMLElement::class, LIBXML_NOCDATA)->children()->children();
        $xml = json_decode(json_encode($xml), true);

        $items = collect($xml)->recursive()->get('item', collect([]));
        $areMultiLevel = $items->keys()->reject(function ($key) {
            return is_numeric($key);
        })->isEmpty();
        if ($areMultiLevel) {
            return $items;
        }

        return collect([$items])->recursive();
    }

    protected function getServiceUrl(string $group): string
    {
        $key = 'y2FqJU-go8JMIQeUq58rZIgr51rkYzNoUobfxLWDvfVKS1BQ';
        return "https://www.goodreads.com/review/list_rss/51747901?key={$key}&shelf={$group}";
    }

    protected function getCachePrefix(): string
    {
        return 'goodreads';
    }
}
