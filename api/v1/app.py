#!/usr/bin/python3
"""API v1"""
from fastapi import FastAPI, HTTPException
from filter_usr import colaborative_filter, prepare_recom
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

my_app = FastAPI()

my_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Data(BaseModel):
    emotion: str
    song_name: str
    rating: int


@my_app.get('/recommender/{nickname}')
async def recommender(emotion: str, nickname: str):
    """function that recommender music"""
    c_fil = colaborative_filter
    p_r = prepare_recom
    data = c_fil.prepare_data(emotion)
    if data is None:
        raise HTTPException(
            status_code=404,
            detail='Data not Found'
        )
    try:
        p_filter, distance, p_keys = c_fil.filter_similarity(data, nickname)
    except KeyError:
        raise HTTPException(status_code=404,
                            detail='Username not Found')

    song = p_r.music_recommender(data, p_filter, p_keys)

    object_data = {
        'person_match': p_filter,
        'similarity': distance,
        'music_r': song
    }

    return JSONResponse(content=object_data)


@my_app.put('/recommender/update_rating/{nickname}')
async def update_rating(nickname: str, data: Data):
    finish = False
    c_fil = colaborative_filter
    csv_file = c_fil.prepare_data(data.emotion)
    filename = './data_emotions/{}-emotions.csv'.format(data.emotion)

    csv_file.at[nickname, data.song_name] = data.rating

    finish = True
    if finish:
        csv_file.to_csv(filename)

    status = {'Status': 'OK'}

    return JSONResponse(content=status)
