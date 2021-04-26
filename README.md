![](readme_img/MoodSic.png)

# MoodSic

Moodsic "Music for your mood" is a web-app for the user to help them find the best kind of music to hear according to their emotional state.

## Deploy
To interact with the app you can enter with one of the followings usernames:
paulaF205, cristiang777, saraH733, ayuobSol898, moroD575 or vicenteioan575.

## Directories

We have three directories to run the platform:
APIemotions: responsible for evaluating the images to process the users mood, api: responsible for managing the colaborative model dor the songs sugestions and client: that is the visual part of the platform, which connects both apis and displays dynamic content.

## Requirements

To run the program you will need **node**, **npm**, **python3**, **tensorflow**, **openCV**, **FER**, **fastapi** and **uvicorn** installed globally on your machine.


## Instructions

### Clone repository

To clone the repository, you must type the following command:

```
$ git clone https://github.com/cristian-fg/Moodsic.git
```


### Installation

Before running it is necessary that you go to the client directory and the APIemotions directories excute the command: 
```
run npm install
```
and on the main directory execute (if you use pip3 then use it instead of just pip):
```
pip install -r
```
Thess commands will download the packages necessary to run the program.

## Execution

You need to open three consoles to let the two apis and the frontend running.

### APIemotions Execution
Enter the APIemotions directory and type the following command:
```
$ node index.js
```

### api Execution
On the main directory type the following command:
```
$ uvicorn api.v1.app:my_app --reload
```

### client Execution
Enter the client directory and type the following command:
```
$ npm start
```
wait for a few minutes and a browser tab will open

## Technologies
### JavaScript
JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites.
### NodeJs
The powerful Node.js runtime environment has been ranked the technology most commonly used by professional developers. Node.js is an event-driven JavaScript runtime. Node has myriad potential uses for JavaScript development including being a great environment for building efficient network applications.
### npm
npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
### ReactJs
ReactJS presents graceful solutions to some of front-end programming’s most persistent issues. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing.
### Express
Express will help you build APIs in JavaScript and implement the CRUD (create, retrieve, update, and delete) functionality which forms the backbone of modern-day apps.
### Python3
Python Python is an interpreted high-level general-purpose programming language. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.
### Tensorflow
TensorFlow is an end-to-end open source platform for machine learning.
### FastAPI
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.
### Uvicorn
Uvicorn is a lightning-fast ASGI server implementation, using uvloop and httptools.
## Learnings about Moodsic
If you want to know more about the learning we had with this project, visit our blogs at the following links:
```
...
```
## Authors
- Paula Fuentes [Github](https://github.com/pafuentess) [LinkedIn](https://www.linkedin.com/in/pafuentess/)
- Cristian Gomez [Github](https://github.com/cristian-fg) [LinkedIn](https://www.linkedin.com/in/cristianfg/)
- Sara Hincapie [Github](https://github.com/shincap8) [LinkedIn](https://www.linkedin.com/in/sahimo/)