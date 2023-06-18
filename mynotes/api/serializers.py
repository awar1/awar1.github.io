from rest_framework.serializers import ModelSerializer
from .models import Coctail

class CoctailSerializer(ModelSerializer):
    class Meta:
        model = Coctail
        fields = '__all__'