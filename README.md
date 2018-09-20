# Excel Play 2018 Website

Start dev server
```bash
npm start
```

Production Build
```bash
npm run build
```

## Directory Structure

```
src
├── components  # all partial components
├── pages       # all top level pages (Redux tree will be connected to these)
└── utils       # any utility functions/classes

```

## CSS
* Try not to use `scss` or `sass`.
* Create a separate css file for each react component and place them in the same directory.
  Eg. 
  ```
  components
  ├── ...
  ├── my-component.js
  └── my-component.css
  ```
* Try to use locally scoped css for components. Locally scoped css rules won't affect anything other than the markup inside the component.
* To make a css file locally scoped, use the format `*.modules.css` for the file name.
Eg. 
  ```
  components
  ├── ...
  ├── my-component.js
  └── my-component.module.css # css rules will be locally scoped for my-component.js
  ```

* Import css directly into your component files and let webpack do the work.
  ```js
  // my-component.js
  ...
  import styles from './my-component.module.css'

  ...
      render(){
        // inside the render method
        return(
          ...
          <div className={styles.someclass}>
             ...
          <div>
          ...
        )
      }
  ```

  ```css
  /* my-component.module.css */
  ...
  .someclass{
    ...
    color: red;
    ...
  }
  ```