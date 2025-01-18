# electron-mouse-events-test

A minimalist Electron application for checking mouse events that occur when you move the mouse cursor over or off a window.

## What to check?

When the mouse cursor moves over or off a focused window, it works normally.

However, when you move the mouse cursor over an unfocused window, `mouseleave` and `mouseout` occur immediately after `mouseenter` and `mouseover`. And when you move the mouse cursor off, `mouseleave` and `mouseout` do not occur.

`mouseleave` `mouseout` The timing of these should be the same whether the window has focus or not.

## Startup

```sh
yarn && yarn dev
```

## How to check

When you start the application, two identical windows will be displayed.  
Place them side by side, focus one of the windows, and move the mouse cursor over and off the document area of ​​each window.  
Compare the mouse events output to the Console.

https://github.com/user-attachments/assets/97af2c5a-f66b-4ccc-9ae5-7ec5ee0df127

## Related information

### My environment

- Electron v34.0.0
- macOS 15.2 arm64

### Related Issue

https://github.com/electron/electron/issues/45246
