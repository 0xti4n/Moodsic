#!/usr/bin/python3
"""module that prepares the songs to recommend"""
import pandas as pd
import random


def search_song(song_list, person_songs_keys):
    """function that finds cations given a list of keys

    Args:
    -> song_list the complete list of songs
    -> person_songs_keys the keys to find in the song list

    Returns:
    -> the song list updated
    """
    return song_list.loc[person_songs_keys]


def prepare_songs(keys):
    """function that organizes the song list

    Args:
    -> keys the name of the songs to be cleaned in the list

    Returns:
    -> a list of songs
    """
    path = './data_emotions/list-songs.csv'
    song_list = pd.read_csv(path, delimiter=',')
    song_list = song_list.set_index('Song Name')

    song_list = song_list.drop(keys)

    return song_list


def music_recommender(data, p_filter, p_keys):
    """function that finds the songs to recommend

    Args:
    -> data the complete data that contains the users
    -> p_filter the name of the user to find in the data
    -> p_keys the list of songs to clean the data

    Returns:
    -> A dict with the recommended song
    """
    song = {}
    person = data.loc[p_filter]
    person = person.drop(['Name', 'Emotion'])
    person_songs = person.drop(p_keys)
    person_songs = person_songs.loc[person_songs > 2]

    person_songs_keys = person_songs.keys().to_list()

    song_list = prepare_songs(p_keys)

    if person_songs_keys == []:
        person_songs_keys = song_list.index.to_list()

    filter_song = search_song(song_list, person_songs_keys)

    len_keys = len(person_songs_keys)
    idx = random.randint(0, len_keys-1)

    data_music = filter_song.loc[person_songs_keys[idx]]

    song['Name'] = data_music.name
    song['Artist'] = data_music.Artist
    song['Link'] = data_music['youtube Link']

    return song
