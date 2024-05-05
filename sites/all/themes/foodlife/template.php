<?php

function foodlife_init() {
    exit;
    // Check if we're not on an admin page.
    if (!path_is_admin(current_path())) {
      // Add JavaScript to the page.
      drupal_add_js(drupal_get_path('theme', 'YOUR_THEME') . '/js/custom.js');
    }
  }