#!/usr/bin/env python3

from fer import FER
import cv2
import sys
import json
import os
import base64
import numpy as np


def Base64(code64):
    image = code64
    decoded_data = base64.b64decode(image)
    np_data = np.fromstring(decoded_data,np.uint8)
    img = cv2.imdecode(np_data,cv2.IMREAD_UNCHANGED)
    return img


def checkEmotions(img):
    ''' detect an emotions from a face '''

    detector = FER()
    detector.detect_emotions(img)
    emotion, score = detector.top_emotion(img)

    return emotion, score

'''
#path = sys.argv[1]
#PATH = "emotions/" + path
path = os.path.abspath("routes")
PATH = path + "/emotions/" + sys.argv[1]
#print(path)
emotion, score = checkEmotions(PATH)
#emotion, score = checkEmotions(path)
'''

code64 = sys.argv[1]
img = Base64(code64)
emotion, score = checkEmotions(img)

print(json.dumps({"emotion": emotion, "score": score}))
sys.stdout.flush()
