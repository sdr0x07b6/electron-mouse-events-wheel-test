# electron-mouse-events-wheel-test

This is a minimal application that observes wheel event generation in a frameless window using `electron-drag-click`.

## What to check?

Create a frameless window with an application that implements `electron-drag-click`.
Set `-webkit-app-region: drag;` for the content area.

No problem on the focused window.
If you rotate the mouse wheel on an unfocused window, the `wheel` event will not be fired.

## Startup

```sh
yarn && yarn dev
```

## How to check

When the application is launched, two identical windows will appear.  
Line up these two windows, focus on one of them, place the mouse cursor within the document area of each window, and rotate the mouse wheel.  
Compare the mouse events output to the console (the unfocused window will output nothing).

## My environment

- Electron v34.0.0
- electron-drag-click v1.0.6
- macOS 15.2 arm64
