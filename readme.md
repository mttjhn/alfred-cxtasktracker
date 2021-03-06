# alfred-cxtasktracker [![Build Status](https://travis-ci.org/mttjhn/alfred-cxtasktracker.svg?branch=master)](https://travis-ci.org/mttjhn/alfred-cxtasktracker)

> An Alfred workflow for quickly accessing tasks in the CXProd TaskTracker system


## Install

Download the alfred workflow here: [alfred-cxtasktracker](https://github.com/mttjhn/alfred-cxtasktracker/raw/master/alfred-cxtasktracker.alfredworkflow)

This workflow also requires that you have a webservice set up on your local computer to serve up information for the appropriate tasks. To set up the webservice, take a look at my [CXProdTools](https://github.com/mttjhn/CXProdTools) repo. This workflow expects that the webservice is set up on the local host using a hosts file alias of `cxprodtools.local`.

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

In Alfred, type `task` and enter a task number.  When a result is shown, press <kbd>Enter</kbd> to navigate to the task webpage.


## License

MIT © [Matthew Johnson](http://mttjhn.com)
