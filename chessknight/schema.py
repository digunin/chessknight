import graphene
from .utils import test

class Query(graphene.ObjectType):
    variant = graphene.List(graphene.Int, start = graphene.Int(default_value=1), position = graphene.Int(default_value = 1))
    board = graphene.List(variant, start = graphene.Int(default_value=1))

    def resolve_board(self, info, **kwargs):
        start = kwargs.get('start')
        if(start < 0 or start > 4):
            return test[0]
        return test[start]
        
    def resolve_variant(self, info, **kwargs):
        start = kwargs.get('start')
        pos = kwargs.get('position')
        start-=1
        pos-=1
        return test[start][pos]
        