Weekend Brunch 
=====================

Weekend Brunch is a Brunch Skeleton powered by 

- [Electron](<http://electron.atom.io/>) 
- [Brunch](<http://brunch.io>)
- [React] (<https://facebook.github.io/react/>)
- [Sass](<http://sass-lang.com/>)
- [Bourbon](<http://bourbon.io/>)
- [Neat](<http://neat.bourbon.io/>)
- [Babel](<https://babeljs.io/>)

 

Getting started
---------------

-   Install (if you don't have them):

    -   [Node.js](<http://nodejs.org>):  `brew install node` on OS X or Download
        the installer for Windows

    -   [Brunch](<http://brunch.io>):  `npm install -g brunch`
    
    -   [Electron](<http://electron.atom.io/>):  `npm install -g electron`

    -   Brunch plugins and Bower dependencies: `npm install & bower install`

-   Run:

    -   `brunch watch --server` — watches the project with continuous rebuild
        This will also launch HTTP server with
        [pushState](<https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history>).

    -   `brunch build --production` — builds minified project for production

    -   `npm start` to launch your project in Electron

    -   `npm build` to use Electron packager

-   Learn:

    -   `public/` dir is fully auto-generated and served by HTTP server. Write
        your code in `app/`
        
    -   Place static files you want to be copied to `public/` in  `app/assets/`

    -   Place Javascript modules in `app/modules` files will automatically be
        wrapped for Require by Brunch

    -   Use `module.exports = name_of_exported_object;` to export classes,
        variables and objects from your modules to be required in other files

    -   Use `require(”modules/file_name”);` to access a module in another
        Javascript file

    -   Place non-modular code in `app/vendor` so that it doesn't get wrapped into a module
    
    -   Place Third Party code in `app/vendor/libs` so that it doesn't get wrapped into a module
