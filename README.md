# CyberEdu Website

A website to be finished in Fall 2017.

##### NOTES for developers:
* The html files for the various pages are identical up until the `<div id="landing"></div>`
    * Within the `div` tag is where your html code will go
    * We could probably also have one html page and just render various divs within it so we don't repeat code
        * This would mean hiding/unhiding various divs to display various pages
* The exact same css file is being linked everywhere
    * We should write our styles on the `styles.scss`, within our respective id
        * So if you're working on the exercises page, write your styles within
        the exercises selector
    * When making changes to the styles, don't forget to convert it to `css`
        * It's best to use the following command to automatically do this for you:
        `sass --watch styles.scss:styles.css --sourcemap=none`
            * The `--watch` will constantly watch the sass file and convert it to css after a change is detected
            * The `--sourcemap=none` stops the `.css.map` from being made. This
            file is for debugging and we probably won't need it since this our sass
            isn't complicated.
