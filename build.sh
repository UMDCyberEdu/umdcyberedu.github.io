#!/bin/bash

# For building the sass
./node_modules/.bin/node-sass styles.scss styles.css --sourcemap=none

# Minify css
./node_modules/.bin/purifycss index.html html/* js/* styles.css --min -o styles.min.css && rm styles.css

# Minify js
./node_modules/.bin/minify js/resources_page.js > js/resources_page.min.js

# For building the resources page
#./node_modules/.bin/mustache -p mustaches/resource_card.mustache \
#data/resources.json mustaches/resources_cards_list.mustache > html/resources_cards_list.html
