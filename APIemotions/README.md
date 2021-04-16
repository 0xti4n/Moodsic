# API to detect emotions.

## Installation 
- [Node.js](https://nodejs.org/)
- python3
- Modulos:
    - [FER](https://pypi.org/project/fer/)
    - tensorflow
    - openCV
    pip install tensorflow>=1.7 opencv-contrib-python==3.3.0.9


## Usage
initialize API:
```sh
node index.js
```

## Routes

- detectemotion: [POST] localhost:3002/emotions:
send an object with the file's path
    ```sh
    {
        "Path": "/home/paula/paula2.jpg"
    }
    ```
    return an object with emotion an score:
     ```sh
    {
        "emotion": "neutral",
        "score": 0.44
    }
    ```
