---
layout: post
title: WP Better Attachments
date: '2015-03-08 17:00:54'
---

**Description:** WordPress plugin that allows you to add/edit/attach/un-attach/sort the files attached to your WordPress posts all from the post editor. Integrates seamlessly with WordPress using the default WordPress attachments type and no configuration needed to add WP Better Attachments to custom post types. You can now also have full control over cropping of the different attachment image sizes through the media editor.

**Plugin Home Page:** [http://wordpress.org/extend/plugins/wp-better-attachments/](http://wordpress.org/extend/plugins/wp-better-attachments/)

#### Thanks to these projects:

*   [WP Settings API Bootstrap](https://github.com/DerekMarcinyshyn/wp-settings-api-bootstrap)
*   [FlexSlider 2](http://www.woothemes.com/flexslider/2/)
*   [Img Area Select](http://odyniec.net/projects/imgareaselect/)

*If your project is included and I do not have you added please let me know, thank you.*

If you have any issues please submit an [issue](https://github.com/DHolloran/wp-better-attachments/issues/new) or fix it/submit a pull request I will try to handle it ASAP. You an also contact me at [DTHolloran@gmail.com](mailto:dtholloran@gmail.com).

[![Click here to lend your support to: WP Better Attachments and make a donation at www.pledgie.com !](http://www.pledgie.com/campaigns/20476.png?skin_name=chrome)](http://www.pledgie.com/campaigns/20476)

* * *

### WPBA Attachments Exist
```
/** @returns boolean */
wpba_attachments_exist(array(
    'post_id'             => current_post_id,
    'show_post_thumbnail' => true
));
```

### WPBA Get Attachments

```
/** @return array $attachments The retrieved attachments, respects all settings. */
wpba_get_attachments(array(
    'post_id'             => current_post_id,
    'show_post_thumbnail' => true
));
```
* * *

### WPBA Attachment List

![WPBA Attachment List](/dist/uploads/screenshot-6.png)

#### Shortcode

```
[wpba-attachment-list
 post_id="current_post_id"
 show_icon="false"
 file_type_categories="image,file,audio,video"
 file_extensions="png,pdf"
 image_icon="path/to/directory/image-icon.png"
 file_icon="path/to/directory/file-icon.png"
 audio_icon="path/to/directory/audio-icon.png"
 video_icon="path/to/directory/video-icon.png"
 icon_size="16,20" **width, height**
 use_attachment_page="true"
 open_new_window="true"
 show_post_thumbnail="true"
 no_attachments_msg="Sorry, no attachments exist."
 wrap_class="wpba wpba-wrap"
 list_class="unstyled"
 list_id="wpba_attachment_list"
 list_item_class="wpba-list-item pull-left"
 link_class="wpba-link pull-left"
 icon_class="wpba-icon pull-left"]
```
#### Function

```
wpba_attachment_list( array(
    'post_id'              => current_post_id,
    'show_icon'            => false,
    'file_type_categories' => array( 'image', 'file', 'audio', 'video' ),
    'file_extensions'      => get_allowed_mime_types(), // array()
    'image_icon'           => 'plugin_url/assets/img/image-icon.png',
    'file_icon'            => 'plugin_url/assets/img/file-icon.png',
    'audio_icon'           => 'plugin_url/assets/img/audio-icon.png',
    'video_icon'           => 'plugin_url/assets/img/video-icon.png',
    'icon_size'            => array( 16, 20 ),
    'use_attachment_page'  => true,
    'open_new_window'      => true,
    'show_post_thumbnail'  => true,
    'no_attachments_msg'   => 'Sorry, no attachments exist.',
    'wrap_class'           => 'wpba wpba-wrap',
    'list_class'           => 'unstyled',
    'list_id'              => 'wpba_attachment_list'
    'list_item_class'      => 'wpba-list-item pull-left'
    'link_class'           => 'wpba-link pull-left'
    'icon_class'           => 'wpba-icon pull-left'
));
```

## Screenshots

### WPBA Post Editor Button

![WPBA Post Editor Button](/dist/uploads/screenshot-1.png)

### WPBA Meta Box

![WPBA Meta Box](/dist/uploads/screenshot-2.png)

### WPBA Unattach Media Library Link

![WPBA Unattach Media Library Link](/dist/uploads/screenshot-3.png)

### WPBA Attachment Editor

![WPBA Attachment Editor](/dist/uploads/screenshot-4.png)

### WPBA Crop Editor

![WPBA Crop Editor](/dist/uploads/screenshot-5.png)

## Getting Started

To get started with WP Better Attachments you can download it directly [here](https://github.com/DHolloran/wp-better-attachments/archive/master.zip), search for WP Github Recent Commit in your administrator section's Plugins > Add New, or you can download it from the [Wordpress plugins directory](http://wordpress.org/extend/plugins/wp-github-recent-commit/)

### Wordpress Plugin Directory Instructions

1.  Search for WP Better Attachments in Plugins > Add New
2.  Install &amp; Activate WP Better Attachments
3.  Go to any page/post/custom post type and start editing your attachments with ease. Use the add attachments button to add new attachments. You can Drag and drop your attachments to arrange their menu order. Click the Un-attach link to un-attach the file from your post.

### Manual Install Instructions

1.  Unzip your download and place in wp-content/plugins/
2.  Activate WP Better Attachments in the Wordpress Admin area
3.  Go to any page/post/custom post type and start editing your attachments with ease. Use the add attachments button to add new attachments. You can Drag and drop your attachments to arrange their menu order. Click the Un-attach link to un-attach the file from your post.