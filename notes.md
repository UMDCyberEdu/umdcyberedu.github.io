# General Notes and Guidelines for Developers
###### Moved from the Drive folder to Github.

### Commit messages
Please write helpful commit messages that briefly state what changes were made. For example, "updated page" is not helpful, but "formatted content and resized header and footer" is helpful.

### Inlining CSS, JavaScript?
This depends on the case and who you ask. Some say if you have small amounts of css and javascript (like a few lines) then it's alright for it to be inline. It'll load fast. But inline css and javascript won't be cached by the visitor's browser, making it unideal for large amounts of css and javascript. It's more organized to keep it external.

### Assets/Images
Please compress all images you add. No image should be larger than 75kb.

https://compressor.io/

### Bulma
We're using Bulma, a CSS framework, do NOT edit the Bulma sass or css files directly. They are meant to be imported into a css, scss, or sass file and one is to work from there. In fact, nothing in the `node_modules` folder requires editing.

http://bulma.io/

### Sass
We are using Sass. Sass is not the actual file linked to a web page, it needs to be converted into a CSS file which is then linked to the web page. We use it for the variables, mixins, and other functionality offered by Sass.

http://sass-lang.com/

### {{mustache}}
{{mustache}} is a templating tool. It allows us to make a template and fill it with data in JSON format, while still being able to reuse the template. So if you find yourself repeating a lot of HTML, it may be useful to use {{mustache}}.

https://mustache.github.io/

### Using `npm run` as a task runner
We're using `npm run` (same as `npm run-scripts`) as a way to automate tasks and quickly execute scripts or commands. In the `package.json` file,
under the `scripts` object, there are various strings and values listed. Running `npm run [string]` will run the corresponding value of the string used.

For example, the below is what happens when we run `npm run test`
```bash
$ npm run test

> echo "testing npm run to see if its working and, if u see this, its working"
testing npm run to see if its working and, if u see this, its working
```
Note that the `test` script is listed in the `package.json` file. **You can write your own useful scripts there.**

### Questions?
These notes are brief and to the point and are not meant to serve as a resource to learn from. If you have questions (e.g. what's `npm`?), use Google and/or ask a team member.
