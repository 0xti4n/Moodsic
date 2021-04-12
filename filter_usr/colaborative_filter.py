#!venv/bin/python3
import pandas as pd
from sys import argv
from scipy.spatial.distance import euclidean


def prepare_data(emotion):
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

    return closest_person, closest_distance

def distance(person1, person2):
    distance = euclidean(person1, person2)
    return distance


""" if __name__ == '__main__':
    emotion_input = argv[1]
    user = argv[2]

    data = prepare_data(emotion_input, user)
    person_filter, distance = filter_similarity(data, user)

    print(person_filter, distance) """
