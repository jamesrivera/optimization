# Website Performance Optimization Project

Source code for this project can be found at: 
https://github.com/udacity/frontend-nanodegree-mobile-portfolio

##Part 1: Optimize PageSpeed Insights score for index.html

### Manual Optimizations 
- inlined web font css
- inlined perfmatters.js
- created pizza-thumb.jpg to avoid resizing of pizza.jpg
- re-optimized larger images in Photoshop
- specified image dimensions
- eliminated render-blocking JavaScript by using async

### Grunt Workflow
- used ```grunt-contrib-imagemin``` to optimize images
- used ```grunt-inline``` to minify and inline css
- sent workflow to compressed/ (manually extracted files after)

##Part 2: Optimize Frames per Second in pizza.html

### Shorten pizza resize time (```main.js```)
- ```changePizzaSizes()```: used fixed percentages instead of calculating new size
- ```changePizzaSizes()```: moved all DOM accesses outside of main loop

### Improve parallax frame rate (```main.js```, ```style.css```)

### Manual Optimizations
- ```createPizzas()```: only generated as many pizzas as necessary to fill the screen
- ```updatePositions()```: removed heavy calculations from within the loop
- re-optimized arger images in Photoshop

### Grunt Workflow
- used ```grunt-contrib-imagemin``` to optimize images