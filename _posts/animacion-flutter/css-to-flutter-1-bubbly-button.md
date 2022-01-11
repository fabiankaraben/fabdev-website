---
title: 'CSS to Flutter #1 - Bubbly Button'
excerpt: 'I found a really nice button in CodePen and decided to port it to Flutter as a practice in my learning about creating animations in Flutter.'
coverImage: '/assets/animacion-flutter/css-to-flutter-bubbly-button.png'
date: '2021-12-21T06:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/animacion-flutter/css-to-flutter-bubbly-button.png'
---

I found a really nice button in CodePen and decided to port it to Flutter as a practice in my learning about creating animations in Flutter.

## Original CSS code

This is the original CSS code (and a bit of JavaScript) for this button:

[Bubbly Button con CSS](https://codepen.io/nourabusoud/pen/ypZzMM)

## How to use BubblyButton in Flutter?

As simple as:

```dart
BubblyButton(
  child: const Text(
    "Click me!",
  ),
  onPressed: () {
    // Here the button actions
  },
),
```

The result will be:

![bubblyButton1.gif](/assets/animacion-flutter/h6fMGo1WX.gif)

The animation works perfectly when the button has other widgets around it, in the following example we can see this.

It is also possible to observe the operation of the button when the focus is received and then the ENTER key is pressed.

```dart
Column(
  mainAxisSize: MainAxisSize.min,
  children: [
    OutlinedButton(
        onPressed: () {},
        child: const Text("Some Top Content"),
    ),
    const SizedBox(height: 10),
    BubblyButton(
      child: const Text(
        "Click me!",
        textAlign: TextAlign.center,
      ),
      onPressed: () {
        //
      },
    ),
    const SizedBox(height: 10),
    OutlinedButton(
      onPressed: () {},
      child: const Text("Some Bottom Content"),
    ),
  ],
)
```

This looks like this:

![bubblyButton2.gif](/assets/animacion-flutter/UdEWdHUon.gif)

You can even customize the colors and size of the bubbles:

```dart
BubblyButton(
  child: const Text(
    "Click me!",
  ),
  color: Colors.black,
  shadowColor: Colors.black,
  bubbleColor: Colors.pink,
  onPressed: () {
    // Here the button actions
  },
),
``` 

## Live demo of BubblyButton on Flutter

Here, you can see the BubblyButton in action:

<iframe height="300" style="width: 100%;" scrolling="no" title="Bubbly Button - CSS to Flutter #1" src="https://codepen.io/fabiankaraben/embed/YzrrZME?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/fabiankaraben/pen/YzrrZME">
  Bubbly Button - CSS to Flutter #1</a> by FabDev (<a href="https://codepen.io/fabiankaraben">@fabiankaraben</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Flutter code of BubblyButton

In this [repository](https://github.com/fabiankaraben/css-to-flutter-series) I will be adding all the animation practices in Flutter that I do.

Specifically, the BubblyButton code is in:

[BubblyButton en Flutter](https://github.com/fabiankaraben/css-to-flutter-series/tree/main/project_1_bubbly_button)