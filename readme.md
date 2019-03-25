# Tachyons Custom

Sharegate's take on Tachyons CSS - the main differentiators being that you can easily override the default values of Tachyons by importing Css "config" files and a spacing scale based on 10. CSS Variables are not compiled by default, in order to do so please check the package.json file.

[Visual Cheat Sheet](https://sharegate.github.io/tachyons-sg/)

## Getting started

Docs can be found at [Tachyons](http://tachyons.io/docs)
The modules are generally pretty small and thus quick and easy to read. Since this is a fork of Tachyons in some instances the official doc is not exactly the truth, please for the time being open the src css files when in doubt.

### Local Setup

Clone the repo from github and install dependencies through npm.

``` bash
git clone https://github.com/sharegate/tachyons-sg.git
cd tachyons-sg
npm install
```

#### Dev

If you want to just use everything in tachyons/src as a jumping off point and
edit all the code yourself, you can compile all of your wonderful changes by
running

```npm start```

This will output both minified and unminified versions of the css to the css directory and watch the src directory for changes.
It's aliased to the command:

```npm run build:watch```

If you'd like to just build the css once without watching the src directory run

```npm run build```

If you want to check that a class hasn't been redefined or 'mutated' there is a linter to check that all of the classes have only been defined once. This can be useful if you are using another library or have written some of your own css and want to make sure there are no naming collisions. To do this run the command

```npm run mutations```

## Configuration

If you want to override the default variables specified in `tachyons-sg` (for instance, changing the color of the `--primary` variable), simply redeclare the variables in a `:root` css class.

``` css
:root {
    --primary: #c63a0c;
}
```

## Docs

The tachyons docs located at [Tachyons](http://tachyons.io) are all open source and located [here](https://github.com/tachyons-css/tachyons-css.github.io).

## Acknowledgements

[@mrmrs](https://github.com/mrmrs) for having created [tachyons](https://github.com/tachyons-css) and introducing me to the wonderful world of Atomic CSS.

## License

Copyright © 2018, Groupe Sharegate inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license [here](https://github.com/sharegate/tachyons-sg/blob/master/LICENSE).
