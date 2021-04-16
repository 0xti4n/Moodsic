#!/usr/bin/env python3

from fer import FER
import cv2
import sys
import json


def checkEmotions(path):
    ''' detect an emotions from a face '''

    img = cv2.imread(path)
    detector = FER()
    detector.detect_emotions(img)
    emotion, score = detector.top_emotion(img) # 'happy', 0.99

    return emotion, score

path = sys.argv[1]
emotion, score = checkEmotions(path)
print(json.dumps({"emotion": emotion, "score": score}))
sys.stdout.flush()
