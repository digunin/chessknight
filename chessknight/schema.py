import graphene
import json
from .utils import test

class Query(graphene.ObjectType):
    board = graphene.JSONString(start = graphene.Int(default_value=1))

    def resolve_board(self, info, **kwargs):
        start = kwargs.get('start')
        start-=1
        if(start < 0): start = 0
        if(start > 3): start = 3
        return json.dumps(test[start])
