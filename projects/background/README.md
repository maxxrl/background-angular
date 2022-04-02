# Angular Animated Background | by maxxrl
[Demo Background Component](https://maxxrl.github.io/background-demo/)

## Installation

```javascript
npm install maxxrl-background
```

## Usage
Add module in **app.module.ts**

```javascript
import {BackgroundModule} from "maxxrl-background";
```
Add in **imports** section

```javascript
imports: [
  BrowserModule,
  BackgroundModule
]
```
Add in **app.component.html** pass any css color you like
```javascript
<animated-circle-background backgroundColor="#202124" circleColor="FFFFFF33"></animated-circle-background>
```

!!!Hint parent element must be position: relative

License
- MIT

