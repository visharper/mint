from rest_framework.views import APIView
from django.http import HttpResponseServerError
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from mauka_api.stock_utils import store_message
from .models import User, Signal
from .serializers import (
    UserSerializer,
    SignalSerializer,
)

from .stock_utils.stock_screener import fetch_data

from mauka_api.utils.date_util import get_today_date, CREATE_DATE_FORMAT

RANGE = "range"
TICKER = "ticker"
TICKERS = "tickers"

class SignalListApiView(APIView):
     def get(self, request):
        response = store_message({})
        if response: 
            return Response(response, status=status.HTTP_200_OK)
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    
class MaukaListApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    # 1. List all
    # def get(self, request, *args, **kwargs):
    #     '''
    #     List all the Mauka items for given requested user
    #     '''
        
    #     # Maukas = Mauka.objects.filter(ticker = request.ticker)
    #     print(request.data)
    #     Maukas = Mauka.objects.all()
    #     serializer = MaukaSerializer(Maukas, many=True)
    #     return Response(None, status=status.HTTP_200_OK)

    # 2. Create
    # {"ticker":"NVDA", "range": "weekly"}
    def post(self, request, *args, **kwargs):
        '''
        Create the Mauka with given Mauka data
        '''
        data = {
            TICKERS: request.data.get(TICKERS), 
            RANGE : request.data.get(RANGE)
        }
        print("--------------------------")
        print(request.data)
        print("--------------------------")
        # response = request.data
        response = fetch_data(data.get(TICKERS,[]))
        if response: 
            return Response(response, status=status.HTTP_200_OK)
        
        # serializer = MaukaSerializer(data=data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    
@csrf_exempt
def userApi(request, id=0):
    if request.method == 'GET':
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return JsonResponse(user_serializer.data, safe=False)
    elif request.method == "POST":
        user_req = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_req)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed To Add", safe=False)
    
@csrf_exempt
def userDetail(request, username="vishal", format=None):
    if request.method == 'GET':
        users = User.objects.get(username)
        user_serializer = UserSerializer(users, many=True)
        return JsonResponse(user_serializer.data, safe=False)
    elif request.method == "POST":
        user_req = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_req)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed To Add", safe=False)
    
@csrf_exempt
def signalDetail(request, range=[], format=None):
    if request.method == 'GET':
        try:
            today_date = get_today_date(CREATE_DATE_FORMAT)
            if not range:
                range = ['2023-10-01', today_date]
            print("REQUESTING DATE RANGE  ------ ", range)
            signals = Signal.objects.filter(create_date__range=range)
            signal_serializer = SignalSerializer(signals, many=True)
            print("GET  Serializer Response : ", signal_serializer)
            if signal_serializer:
                print("Prasing  Serializer Response signal_serializer ", )
                return JsonResponse(signal_serializer.data, safe=False)
            return Response(f'Failed to fetch-----', status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("_----- Error -------", e)
            # return JsonResponse(e, safe=False)
            
    elif request.method == "POST":
        req = JSONParser().parse(request)
        serializer = SignalSerializer(data=req)
        print("Serializer Response : ", serializer)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse(f"Failed To Add due to : {serializer}", safe=False)