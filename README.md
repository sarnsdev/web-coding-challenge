Shipt Coding Challenge
======================
This webpage is to respond to the Shipt coding challenge for the Web Developer Intern position at the Birmingham HQ. Below in my Readme section I describe how to run this on a local machine in development mode and how I push to a remote after a story has been implemented fully. I will be doing this so that the dev staff at Shipt can see my standard workflow and adjust practices if required  

Readme
======

Navigation
----------

Reasoning
---------

Personally, I am a web developer with not as much practice as I would like. I do a lot of research and watch lectures on the topic that are recorded at various conferences. I am rather familiar with the tools Ruby on Rails, NodeJS, JEE/Spring, and a few small PHP frameworks. I chose NodeJS for this specific project because through my experience as a Node developer I knew of several npm packages that would help me out with this goal, which shows a foundation in an ability to read outside code specs and an ability to  

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

* If you are trying to run this after a 'git clone' you will need to run 'npm update' so that you can download node_modules that are needed to run since I disallow that folder to be pushed to my repository. 



TODO
====
- [X] Setup with basic hello world
- [X] Setup on Twitter Bootstrap
- [ ] Setup dummy views
- [ ] Write js to pull from github
- [ ] connect js to dummy views
- [ ] clean up
