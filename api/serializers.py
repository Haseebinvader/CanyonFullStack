from rest_framework import serializers
from .models import *


# Serializers define the API representation.
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id','ItemNo','qnty', 'price', 'Description', 'Description2', 'SearchDescription','Blocked', 'CompoundNumber', 'Material','Durometer','DurometerScale','DurometerRange','Color','LowTemperature','FDACompliant','MaterialSubtype','Brand','MaterialNotes','CrossSectionalGeometry','CrossSectionalDiameter','InsideDiameter','SizeAS568','SizeMetric','SizeJIS','SizeStandard','Online']
