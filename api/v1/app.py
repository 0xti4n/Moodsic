#!venv/bin/python3
"""API v1"""
from fastapi import FastAPI, HTTPException
from filter_usr import colaborative_filter

my_app = FastAPI()


@my_app.get('/recommender/')
async def recommender(emotion: str, username: str):
    """function that recommender music"""
    c_fil = colaborative_filter
    data = c_fil.prepare_data(emotion)
    if data is None:
        raise HTTPException(
            status_code=404,
            detail='Data not Found'
        )
    try:
        person_filter, distance = c_fil.filter_similarity(data, username)
    except KeyError:
        raise HTTPException(status_code=404,
                            detail='Username not Found')
    return {
        'person_match': person_filter,
        'similarity': distance
    }
