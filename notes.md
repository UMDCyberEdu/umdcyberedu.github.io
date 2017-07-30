# General Notes and Guidelines for Developers
###### Moved from the Drive folder to Github.

### Commit messages
Please write helpful commit messages that briefly state what changes were made. For example, "updated page" is not helpful, but "formatted content and resized header and footer" is helpful.

### Inlining CSS, JavaScript?
This depends on the case and who you ask. Some say if you have small amounts of css and javascript (like a few lines) then it's alright for it to be inline. It'll load fast. **But inline css and javascript won't be cached by the visitor's browser**, making it unideal for large amounts of css and javascript. It's more organized to keep it external.

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

### Adding exercises to the exercises_page.html page
Note: A section can be a learn section or a exercise section
#### Step 1: Adding menu item (HTML),
Copy the Menu-item template from below and paste it after the last `<li></li>` element of the `<ul></ul>` element that has the name class `menu-list` in the exercises_page.html file. Then, Replace the word `Privacy` with the name of your topic. Replace `id="menu5"` with `id="menuN"` where `N` is the next appropiate odd number of the section. Replace `id="menu6"` with `id="menuN"` where `N` is the next appripiate even number of the section. For example, if there are currently a total number of 8 sections, the next odd number is 9, and the next even number is 10. 

###### Menu-item template:
``` html
<li>
  <p class="menu-label">Privacy</p>
  <ul>
    <li><span class="tag is-primary is-small" id="menu5">Learn</span></li>
    <li><span class="tag is-primary is-small" id="menu6">Exercise</span></li>
  </ul>
</li>
```

#### Step 2: Adding main HTML,
Copy the Main-HTML template from below and paste it after the last section section in the exercises_page.html file. The end of the last section should have a comment like this `<!-- Name exercise (section N) end -->` where `N` is the number of total sections. Then, replace every occurence of the word `privacy` with the name of your topic. Also replace every occurance of the numbers `5` and `6` with the next appripiate odd number and even number for the section. For example, if there are currently a total number of 8 sections, the next odd number is 9, and the next even number is 10.   

###### Main-HTML template: 
``` html
<!-- privacy learn (section 5)-->
<div class="column is-10 section5" id="privacy_learn" style="display:none">
    <!-- 
     YOUR
     HTML
     GOES 
     HERE
     -->
    <div class="prev_next_container">
        <div class="is-inline-flex is-pulled-left">
            <i class="fa fa-arrow-left" aria-hidden="true" onClick="changeSection('5','prev')"></i>
        </div>
        <div class="is-inline-flex is-pulled-right">
            <i class="fa fa-arrow-right" aria-hidden="true"  onClick="changeSection('5','next')"></i>
        </div>
    </div>
</div>
<!-- privacy learn (section 5) end -->

<!-- privacy exercise (section 6) -->
<div class="column is-10 section6" id="privacy_exercise" style="display:none">
     <!-- 
     YOUR
     HTML
     GOES 
     HERE
     -->
    <div class="prev_next_container">
        <div class="is-inline-flex is-pulled-left">
            <i class="fa fa-arrow-left" aria-hidden="true" onClick="changeSection('6','prev')"></i>
        </div>
        <div class="is-inline-flex is-pulled-right">
            <i class="fa fa-arrow-right" aria-hidden="true"  onClick="changeSection('6','next')"></i>
        </div>
    </div>
</div>
<!-- privacy exercise (section 6) end -->
```

#### Step 3: Changing JavaScript,
Inside the function `changeSections` in the exercises_page.js file there is a variable called `totalSections`. A number is being assigned to this variable. Change that number to the total number of sections. So, if you have added a complete exercise that has a learn section and an exercises section, that number should be increased by 2. 
``` javascript
function changeSection(num, action) {
    var totalSections, current, next, prev, delay, body;
    totalSections = 6; //Note: Increases this number every time a section is added. 
 ```

### Questions?
These notes are brief and to the point and are not meant to serve as a resource to learn from. If you have questions (e.g. what's `npm`?), use Google and/or ask a team member.
