#!/bin/bash

# For building the sass
sass styles.scss styles.css --sourcemap=none

# Minify css
./node_modules/.bin/minify styles.css > styles.min.css

# Minify js
./node_modules/.bin/minify js/resources_page.js > js/resources_page.min.js

# For building the resources page
./node_modules/.bin/mustache -p mustaches/resource_card.mustache \
data/resources.json mustaches/resources_cards_list.mustache > html/resources_cards_list.html
