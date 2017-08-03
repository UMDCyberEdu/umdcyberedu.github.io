# How to Add Exercises
Written by Erik 

### Adding exercises to the exercises_page.html page
Note: A section can be a learn section or a exercise section
#### Step 1: Adding menu item (HTML),
Copy the Menu-item template from below and paste it after the last `<li></li>` element of the `<ul></ul>` element that has the name class `menu-list` in the exercises_page.html file. Then, Replace the word `Privacy` with the name of your topic. Replace every occurance of the number 5 with the next appropiate odd number of the section. Replace every occurance of the number 6 with the next appripiate even number of the section. For example, if there are currently a total number of 8 sections, the next odd number is 9, and the next even number is 10.

###### Menu-item template:
``` html
<li>
  <p class="menu-label">Privacy</p>
  <ul>
    <li><span class="tag is-primary is-small" id="menu5" onClick="changeSection('5','menu')">Learn</span></li>
    <li><span class="tag is-primary is-small" id="menu6" onClick="changeSection('6','menu')">Exercise</span></li>
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
