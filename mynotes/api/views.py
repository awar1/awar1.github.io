from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Coctail
from .serializers import CoctailSerializer
from .utils import *
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
       {
            'Endpoint': '/coctails/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of coctails'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getCoctails(request):
    coctails = Coctail.objects.all()
    serializer = CoctailSerializer(coctails,many=True
                            ,context={'request':request})
    return Response(serializer.data)
