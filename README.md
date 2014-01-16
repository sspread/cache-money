# Flickr Jr 
 
##Learning Competencies 

##Summary 

 We're going to create a simple version of Flickr.  There will be three core domain models: users, albums, and photos.

The goal is to become familiar with handling file uploads and also work on more advanced AJAX / jQuery techniques.

## Objectives

### Wireframes

This application is complicated enough to wireframe.  A user should be able to view photos and albums without logging in, but needs to sign up or log in in order to upload a photo.

Every photo should belong to an album.  It probably makes sense to automatically create a "default album" for every user as soon as they sign up.

We should be able to see all albums for a particular user at a URL like

```text
/users/:user_id/albums
```

and every photo in an album at a URL like

```text
/albums/:album_id
```

and a particular photo at a URL like

```text
/albums/:album_id/:photo_id
```

Feel free to change the URL scheme, just don't make it too complicated.

### Handling Uploads

For image uploading with Sinatra, we recommend using the following gems:

* [CarrierWave](https://github.com/jnicklas/carrierwave)
* [MiniMagick](https://github.com/minimagick/minimagick)

Here's the documentation for [using CarrierWave with MiniMagick](https://github.com/jnicklas/carrierwave#using-minimagick).

To upload a file using an HTML form you need to use the `file` input type and set `enctype` in the `form` tag, like so:

```html
<form action="/whatever" enctype="multipart/form-data">
  <input type="file" name="filename">
</form>
```

Read this little blog post on [uploading file with Sinatra](http://www.wooptoot.com/file-upload-with-sinatra).  Note that it uses [HAML](http://haml.info/) instead of the default ERB, but it's easy enough to see how the HAML translates into HTML.

Sometimes when working with gems, it's necessary to configure them to work correctly in your environment. Since the author of CarrierWave doesn't know anything about our "Sinatra skeleton", you'll probably need to add some configuration to your `environment.rb` file to tell CarrierWave in which folder(s) you'd like things to land when they are uploaded. For example:

```ruby
CarrierWave.configure do |config|
  # your configuration code goes here
end
```

*Hint*: Check out the `root` and `store_dir` configuration variables.

*Pro-tip*: You might want to use your Sinatra Sandbox to play with file uploads first, so you understand this one moving part.  Build a toy app before you build a fully-featured app.  No albums, no users, just a `photos` table and `Photo` model, a form to upload a photo, and a page showing all the photos.

### Models, Routes, &amp;

You'll want the following models, at least: `Photo`, `User`, and `Album`.  Get everything working without using any AJAX.  This will take a while.

HOLD OFF ON THE WIZARDY.  THIS IS A WIZARDRY-FREE ZONE.

### WIZARD TIME

Ok, now time for wizardy.

Using the image carousel you wrote earlier today, create a "slideshow mode" for the album show page.

What other magic spells can you think up?  AJAX file upload is tricky, so avoid that for now.

What about using [jQuery sortable](http://jqueryui.com/sortable/#display-grid)  to let users rearrange their albums? 

##Releases
###Release 0 

##Optimize Your Learning 

##Resources