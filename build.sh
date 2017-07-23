#!/bin/bash

# For building the sass
sass styles.scss styles.css --sourcemap=none

# Minify css
minify styles.css

# For building the resources page
mustache -p mustaches/resource_card.mustache \
data/resources.json mustaches/resources_page.mustache > html/resources_page.html
