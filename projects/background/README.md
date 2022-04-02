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
Add in **app.component.html**
```javascript
<animated-circle-background></animated-circle-background>
```

!!!Hint parent element must be position: relative

License
- MIT

