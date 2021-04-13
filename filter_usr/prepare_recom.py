#!venv/bin/python3
""""""
import pandas as pd
import random


def search_song(song_list, person_songs_keys):
    """"""
    return song_list.loc[person_songs_keys]


def prepare_songs(keys):
    """"""
    path = './data_emotions/list-songs.csv'
    song_list = pd.read_csv(path, delimiter=',')
    song_list = song_list.set_index('Song Name')

    song_list = song_list.drop(keys)

    return song_list


def music_recommender(data, p_filter, p_keys):
    """"""
    song = {}
    person = data.loc[p_filter]
    person = person.drop(['Name', 'Emotion'])
    person_songs = person.drop(p_keys)
    person_songs = person_songs.loc[person_songs > 2]

    person_songs_keys = person_songs.keys().to_list()

    song_list = prepare_songs(p_keys)

    filter_song = search_song(song_list, person_songs_keys)

    len_keys = len(person_songs_keys)
    idx = random.randint(0, len_keys-1)

    data_music = filter_song.loc[person_songs_keys[idx]]

    song['Name'] = data_music.name
    song['Artist'] = data_music.Artist
    song['Link'] = data_music['youtube Link']

    return song
