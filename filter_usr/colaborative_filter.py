#!/usr/bin/python3
"""module that applies the collaborative filter"""
import pandas as pd
from sys import argv
from scipy.spatial.distance import euclidean


def prepare_data(emotion):
    """function that organizes the data for the search

    Args:
    -> emotion an string that contains the emotion to find

    Returns:
    -> organized data
    """
    emot_list = ['angry', 'happy', 'sad', 'neutral']

    if emotion in emot_list:
        path = '{}-emotions.csv'.format(emotion)
    else:
        return None

    fil_e = "./data_emotions/{}".format(path)
    data = pd.read_csv(fil_e, delimiter=',')

    data = data.fillna(0)
    data = data.set_index('Nickname')

    for idx in data:
        if idx not in ['Name', 'Emotion']:
            data[idx] = data[idx].astype('int64')

    return data


def filter_similarity(data, user):
    """function that applies the collaborative filter

    Args:
    -> data a pandas object containing the organized data for the search
    -> user the selected user who will be searched for people
        with similar tastes

    Returns:
    -> closest_person the person with whom the match was made
    -> closest_distance euclidean distance
    -> person_keys song keys to update the song list
    """
    person = data.loc[user]
    person = person.loc[person != 0.0]
    person = person.drop(['Name', 'Emotion'])
    person_keys = person.keys().to_list()
    closest_distance = float('inf')
    closest_person = ''

    for other_person in data.index:
        if other_person == user:
            continue
        person2 = data.loc[other_person]
        person2 = person2.loc[person_keys]

        distance_btwn_person = distance(person, person2)
        if distance_btwn_person < closest_distance:
            closest_distance = distance_btwn_person
            closest_person = other_person

    return closest_person, closest_distance, person_keys


def distance(person1, person2):
    """function that finds the euclidean distance

    Args:
    -> person1 the data of the person1 with whom it is to be compared
    -> person2 the data of the person2 with whom it is to be compared

    Returns:
    -> the distance between person1 and person2
    """
    distance = euclidean(person1, person2)
    return distance
