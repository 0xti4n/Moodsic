#!/usr/bin/env python3

from fer import FER
import cv2
import sys
import json
import os


def checkEmotions(path):
    ''' detect an emotions from a face '''

    img = cv2.imread(path)
    detector = FER()
    detector.detect_emotions(img)
    emotion, score = detector.top_emotion(img) # 'happy', 0.99

    return emotion, score

#path = sys.argv[1]
#PATH = "emotions/" + path
path = os.path.abspath("routes")
PATH = path + "/emotions/" + sys.argv[1]
#print(path)
emotion, score = checkEmotions(PATH)
#emotion, score = checkEmotions(path)
print(json.dumps({"emotion": emotion, "score": score}))
sys.stdout.flush()
