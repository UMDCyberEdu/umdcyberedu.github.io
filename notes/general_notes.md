# General Notes and Guidelines for Developers
###### Moved from the Drive folder to Github.
Written by Omkar

### Getting Started
Run `npm install` in the root of this project. Give `build.sh` executable permissions.

### Commit messages
Please write helpful commit messages that briefly state what changes were made. For example, "updated page" is not helpful, but "formatted content and resized header and footer" is helpful.

### Inlining CSS, JavaScript?
This depends on the case and who you ask. Some say if you have small amounts of css and javascript (like a few lines) then it's alright for it to be inline. It'll load fast. **But inline css and javascript won't be cached by the visitor's browser**, making it unideal for large amounts of css and javascript. It's more organized to keep it external.

### CSS and Sass management
Use a separate Sass file for each page you're building/maintaining. Add the `@import` to the `styles.scss` file. Then
`sass styles.scss styles.css` to convert the main Sass file to CSS. Next, minify the main CSS file. The `./build.sh` takes 
care of this for you, as long as you just execute it and have `sass` installed.

### Assets/Images
Please compress all images you add. Images, after compression, should be less than 75kB (the lower, the better). This will decrease the load time for images.

https://compressor.io/

### Bulma
We're using Bulma, a CSS framework, do NOT edit the Bulma sass or css files directly. They are meant to be imported into a css, scss, or sass file and one is to work from there. In fact, nothing in the `node_modules` folder requires editing.

http://bulma.io/

### Sass
We are using Sass. Sass is not the actual file linked to a web page, it needs to be converted into a CSS file which is then linked to the web page. We use it for the variables, mixins, and other functionality offered by Sass.

http://sass-lang.com/

### {{mustache}}
{{mustache}} is a templating tool. It allows us to make a template and fill it with data in JSON format, while still being able to reuse the template. So if you find yourself repeating a lot of HTML, it may be useful to use {{mustache}}.

"Precompiling" (using the CLI) leads to better performance.
```bash
$ mustache -p partial.mustache data.json template.mustache > output.html
```

https://mustache.github.io/

### Using `npm run` as a task runner
We're using `npm run` (same as `npm run-scripts`) as a way to automate tasks and quickly execute scripts or commands. In the `package.json` file,
under the `scripts` object, there are various strings and values listed. Running `npm run [string]` will run the corresponding value of the string used.

For example, the below is what happens when we run `npm run test` (according to our [package.json](package.json) file)
```bash
$ npm run test

> echo "testing npm run to see if its working and, if u see this, its working"
testing npm run to see if its working and, if u see this, its working
```
Note that the `test` script is listed in the `package.json` file. **You can write your own useful scripts there.**

### Testing the Website

If you have `Node.js` installed then go ahead and run:

```bash
$ npm start
```
This will start a local webserver at `localhost:8000`. Why does this work? Because in `package.json`,
there's a npm run script where `npm start` will actually run `./node_modules/.bin/http-server -a localhost -p 8000 -c-1`.

### Performance and Speed

Please use Google PageSpeed Insights for feedback on your webpage.

https://developers.google.com/speed/pagespeed/insights/

### Questions?
These notes are brief and to the point and are not meant to serve as a resource to learn from. If you have questions (e.g. what's `npm`?), use Google and/or ask a team member.
