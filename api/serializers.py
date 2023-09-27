from rest_framework import serializers
from .models import *


# Serializers define the API representation.
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id','picture1','picture2','ItemNo','qnty', 'price','HighTemperature', 'Description', 'Description2', 'SearchDescription','Blocked', 'CompoundNumber', 'Material','Durometer','DurometerScale','DurometerRange','Color','LowTemperature','FDACompliant','MaterialSubtype','Brand','MaterialNotes','CrossSectionalGeometry','CrossSectionalDiameter','InsideDiameter','SizeAS568','SizeMetric','SizeJIS','SizeStandard','Online', 'USPClassVI', 'NSF61']

# class SizeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ['SizeStandard']