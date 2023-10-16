from rest_framework import serializers
from .models import User, WatchList, Recommendation, Signal

from . import (
    SIGNAL_CATEGORY,
    SIGNAL_CREATE_DATE, 
    SIGNAL_MESSAGE,
    SIGNAL_TICKER,
    SIGNAL_TIME_RANGE,
    SIGNAL_MESSAGE_TYPE
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class WatchListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = '__all__'
        
class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = '__all__'
        
class SignalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signal
        fields = '__all__'