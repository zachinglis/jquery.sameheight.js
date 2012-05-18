# jQuery (Responsive) Same-Height

Version 1.0


## Introduction

Unfortunately even in 2012 there is no elegant CSS solution to keep columns the same height. Display table is buggy, not very cross-browser friendly and generally a PITA. This plugin provides the ability to keep columns the same height, and responsively fluidly when the browser window is resized.

## Usage
  
    // Make all the article's belonging to panel have the same height
    $("#panels article").sameHeight();  

    // Make all the article's belonging to panel have the same height, but not when it's in mobile view (if for example they're all stacked vertically)
    $("#panels article").sameHeight({
      'window-min-width' : 768
    });

## Changelog

  * *18th May 2012* - First version released

## Credits

* Zach Inglis - @zachinglis - http://zachinglis.com
