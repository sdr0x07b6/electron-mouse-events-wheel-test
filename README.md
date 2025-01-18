# electron-mouse-events-test

A minimalist Electron application for checking mouse events that occur when you move the mouse cursor over or off a window.

## What to check?

When the mouse cursor moves over or off a focused window, it works normally.

However, when you move the mouse cursor over an unfocused window, mouseleave and mouseout occur immediately after mouseenter and mouseover. And when you move the mouse cursor off, mouseleave and mouseout do not occur.

## Startup

```sh
yarn && yarn dev
```

## How to check

When you start the application, two identical windows will be displayed.  
Place them side by side, focus one of the windows, and move the mouse cursor over and off the document area of ​​each window.  
Compare the mouse events output to the Console.
