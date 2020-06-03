/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


import { start as startRails } from "@rails/ujs";

startRails();

import jQuery from "jquery";

// jQuery aliases
window.jQuery = jQuery;
window.jquery = jQuery;
window.$ = jQuery;

import "polyfills.js";
import { Drawer } from "drawer";
import { Toast } from "toast";
import { Notification } from "notification";
import { checkTimeZone, initCSRF, initTooltips } from "util.js";
import { initClipboard } from "copy";

// Initialize clipboard.js
initClipboard();

$(() => new Drawer());

// Adds the CSRF token to each ajax request
initCSRF();

$(initTooltips);

// Use a global dodona object to prevent polluting the global na
const dodona = window.dodona || {};
dodona.checkTimeZone = checkTimeZone;
dodona.Toast = Toast;
dodona.Notification = Notification;
dodona.initTooltips = initTooltips;
window.dodona = dodona;
