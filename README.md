Shipt Coding Challenge
======================
This webpage is to respond to the Shipt coding challenge for the Web Developer Intern position at the Birmingham HQ. Below in my Readme section I describe how to run this on a local machine in development mode and how I push to a remote after a story has been implemented fully. I will be doing this so that the dev staff at Shipt can see my standard workflow and adjust practices if required  

Readme
======

Navigation
----------

Reasoning
---------

Workflow
--------
- Open code using
   ```bash
   cd path/to/directory
   atom web-coding-challenge/
   ```
- Edit and update code as needed
- View code locally
   ```bash
   node index.js
   ```
- Commit to GitHub
   ```bash
   git add .
   git commit -m "Comments here"
   git push origin master
   ```
- Commit to Heroku once working
   ```bash
   git push heroku master
   heroku open
   ```



TODO
====
- [X] Setup with basic hello world
- [X] Setup on Twitter Bootstrap
- [ ] Setup dummy views
- [ ] Write js to pull from github
- [ ] connect js to dummy views
- [ ] clean up
