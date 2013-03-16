// ==UserScript==
// @name          VineVolume
// @namespace     http://robbie.io/
// @description   Automatically unmutes Vine videos on vine.co
// @include       http://vine.co/*
// @include       https://vine.co/*
// ==/UserScript==
var muteButton = document.getElementsByClassName("mute-button")[0].className="mute-button on";
document.getElementById('post_html5_api').volume=1