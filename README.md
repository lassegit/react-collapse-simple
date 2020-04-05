# react-collapse-simple

> Simple library for collapsing and expanding content with sliding animation

[![NPM](https://img.shields.io/npm/v/react-collapse-simple.svg)](https://www.npmjs.com/package/react-collapse-simple) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-collapse-simple
```

## Usage

```tsx
import React, { Component } from 'react';

import ReactCollapseSimple from 'react-collapse-simple';
import 'react-collapse-simple/dist/index.css';

function Example() {
  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Open/close
      </button>
      <ReactCollapseSimple isOpen={isOpen}>
        <div>
          <h3>Lorem ipsum dolor sit amet consetetur sadipscing elitr</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </p>
        </div>
      </ReactCollapseSimple>
    </>
  );
}
```

Alternatively you can also just copy/paste the component and keep it in your own project. The source file is in `src/index.tsx`.

Component also exposes 2 classes. One for the outer div which contains the animation: `react-collapse-simple-wrapper` and for the inner on which the height is measured: `react-collapse-simple-inner` (you might want to make this width: 100%;);
