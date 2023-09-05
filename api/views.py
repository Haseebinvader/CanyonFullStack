import requests

from django.http import JsonResponse

from django.views import View
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from .serializers import *
from .models import Product

from django.db.models import Count

from django.db.models import Q
from django.db.models import FloatField
from django.db.models.functions import Cast


class DataFetchView(View):

    def get(self, request):

        # Find duplicates based on ItemNo

        # duplicate_itemnos = Product.objects.values('ItemNo').annotate(count=Count('ItemNo')).filter(count__gt=1)

        # for duplicate in duplicate_itemnos:

        #     item_no = duplicate['ItemNo']

        #     # Get all duplicate records for this ItemNo

        #     duplicate_products = Product.objects.filter(ItemNo=item_no)

        #     # Keep one record and delete the rest

        #     print(duplicate_products.exclude(pk=duplicate_products.first().pk))

        access_token = self.get_access_token()

        if not access_token:
            return JsonResponse({'error': 'Failed to get access token'}, status=500)

        product_list = []

        base_material_type_list = []

        hard_list = []

        color_list = []

        brand_list = []

        submaterial_list = []

        url = "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/SandboxNoExtentions/ODataV4/Company(%27My%20Company%27)/itemapi"

        while url:

            response = requests.get(url, headers=self.get_headers(access_token))

            if response.status_code == 200:

                data = response.json()

                items = data.get('value', [])

                previous_item_no = None

                product_list = []

                base_material_type_list = []

                hard_list = []

                color_list = []

                brand_list = []

                submaterial_list = []

                current_product = None

                for item in items:

                    is_same_product = item['ItemNo'] == previous_item_no

                    previous_item_no = item['ItemNo']

                    if not is_same_product:

                        if current_product and not current_product['Blocked']:

                            product_list.append(current_product)

                        current_product = {

                            'ItemNo': item['ItemNo'],

                            'qnty': item['Quantity'],

                            'price': item['UnitPrice'],

                            'Description': item['Description'],

                            'Description2': item['Description2'],

                            'SearchDescription': item['SearchDescription'],

                            'LotSize': item['LotSize'],

                            'Blocked': item['Blocked'],

                            'picture1': item['Picture@odata.mediaEditLink'],

                            'picture2': item['Picture@odata.mediaReadLink'],

                        }

                    if item['AttributeName']:
                        attribute_key = item['AttributeName'].replace(' ', '').replace(r'\W', '')

                        current_product[attribute_key] = item['AttributeValue']

                if current_product and not current_product['Blocked']:
                    product_list.append(current_product)

                for product in product_list:

                    for key, value in product.items():

                        if key == 'Material' and value not in base_material_type_list:

                            base_material_type_list.append(value)

                        elif key == 'DurometerRange' and value not in hard_list:

                            hard_list.append(value)

                        elif key == 'Color' and value not in color_list:

                            color_list.append(value)

                        elif key == 'Brand' and value not in brand_list:

                            brand_list.append(value)

                        elif key == 'MaterialNotes' and value not in submaterial_list:

                            submaterial_list.append(value)

                for product_data in product_list:
                    p = Product.objects.filter(ItemNo=product_data.get('ItemNo')).first()

                    if not p:
                        pr = Product(

                        ItemNo=product_data.get('ItemNo'),

                        qnty=product_data.get('qnty'),

                        price=product_data.get('price'),

                        Description=product_data.get('Description'),

                        Description2=product_data.get('Description2'),

                        SearchDescription=product_data.get('SearchDescription'),

                        LotSize=product_data.get('LotSize'),

                        Blocked=product_data.get('Blocked'),

                        CompoundNumber=product_data.get('CompoundNumber'),

                        Material=product_data.get('Material'),

                        Durometer=product_data.get('Durometer'),

                        DurometerScale=product_data.get('DurometerScale'),

                        DurometerRange=product_data.get('DurometerRange'),

                        Color=product_data.get('Color'),

                        LowTemperature=product_data.get('LowTemperature(°C)'),

                        HighTemperature=product_data.get('HighTemperature(°C)'),

                        FDACompliant=product_data.get('FDACompliant'),

                        MaterialSubtype=product_data.get('MaterialSubtype'),

                        CureType=product_data.get('CureType'),

                        Encapsulated=product_data.get('Encapsulated'),

                        Brand=product_data.get('Brand'),

                        SalesNotes=product_data.get('SalesNotes'),

                        MaterialNotes=product_data.get('MaterialNotes'),

                        CleanRoomManufactured=product_data.get('CleanRoomManufactured'),

                        FDAType=product_data.get('FDAType'),

                        USPClassVI=product_data.get('USPClassVI'),

                        USPClassVI87=product_data.get('USPClassVI87'),

                        USPClassVI88=product_data.get('USPClassVI88'),

                        A3Sanitary=product_data.get('3ASanitary'),

                        KTW=product_data.get('KTW'),

                        WRAS=product_data.get('WRAS'),

                        ULListed=product_data.get('ULListed'),

                        ULRating=product_data.get('ULRating'),

                        MetalDetectable=product_data.get('MetalDetectable'),

                        NSF61=product_data.get('NSF61'),

                        NSF51=product_data.get('NSF51'),

                        AntiExplosiveDecompression=product_data.get('AntiExplosiveDecompressionAED'),

                        NACETM0297=product_data.get('NACETM0297'),

                        NORSOKM710=product_data.get('NORSOKM710'),

                        UltraLowTemperature=product_data.get('UltraLowTemperature'),

                        UltraHighTemperature=product_data.get('UltraHighTemperature'),

                        SteamResistant=product_data.get('SteamResistant'),

                        UltraSteamResistant=product_data.get('UltraSteamResistant'),

                        InternallyLubricated=product_data.get('InternallyLubricated'),

                        ExternallyLubricated=product_data.get('ExternallyLubricated'),

                        ConductiveFiller=product_data.get('ConductiveFiller'),

                        LowCompressionSet=product_data.get('LowCompressionSet'),

                        CrossSectionalGeometry=product_data.get('CrossSectionalGeometry'),

                        CrossSectionalDiameter=product_data.get('CrossSectionalDiameter(CS)'),

                        InsideDiameter=product_data.get('InsideDiameter(ID)'),

                        SizeAS568=product_data.get('Size(AS568)'),

                        SizeJIS=product_data.get('SizeJIS'),

                        SizeMetric=product_data.get('SizeMetric'),

                        SizeStandard=product_data.get('SizeStandard'),

                        Online=product_data.get('Online'),

                        picture1=product_data.get('picture1'),

                        picture2=product_data.get('picture2'),

                    )

                        pr.save()

                if "@odata.nextLink" in data:

                    url = data["@odata.nextLink"]

                else:

                    url = None



            else:

                return JsonResponse({'error': 'Error fetching data'}, status=500)

        return JsonResponse({

            "product_list": product_list,

            "base_material_type_list": base_material_type_list,

            "hard_list": hard_list,

            "color_list": color_list,

            "brand_list": brand_list,

            "submaterial_list": submaterial_list

        })

    def get_access_token(self):

        access_token = None

        data = {

            'grant_type': 'client_credentials',

            'client_id': '68147cfe-d472-4788-a9ac-7aa804249a96',

            'client_secret': 'KZ28Q~a..oYpL0zdOuqaK-OgFyqsYj6Xuxg05cfa',

            'scope': 'https://api.businesscentral.dynamics.com/.default'

        }

        headers = {

            'Content-Type': 'application/x-www-form-urlencoded'

        }

        response = requests.post(

            'https://login.microsoftonline.com/4e94f06f-db01-47eb-aff3-7a284b01dd84/oauth2/v2.0/token',

            data=data,

            headers=headers

        )

        if response.status_code == 200:

            token = response.json()

            access_token = token['access_token']

            print(access_token)

        else:

            return JsonResponse({'error': 'Internal Server Error'}, status=500)

        return access_token

    def get_headers(self, access_token):

        return {

            "Authorization": f"Bearer {access_token}"

        }

class CustomFilterBackend(DjangoFilterBackend):
    def filter_queryset(self, request, queryset, view):
        # Get the filter parameters from the request
        filterset = self.get_filterset(request, queryset, view)
        print(request.query_params.get('HighTemperature', None))
        
        # Apply custom filtering logic for each field
        for field_name, value in request.GET.items():
            if field_name=='HighTemperature'or field_name=='LowTemperature':
                low_temp = request.query_params.get('LowTemperature', None)
                high_temp = request.query_params.get('HighTemperature', None)

                queryset = Product.objects.filter(
                    Q(LowTemperature__lte=low_temp) &
                    Q(HighTemperature__gte=high_temp)
                )
            elif field_name in filterset.filters:
                # Split values by comma to allow multiple values
                values = value.split(',')
                
                # Handle less than and greater than queries for temperature fields
                if 'lt:' in values[0]:
                    operator = '__lt'
                    value = (values[0][3:])
                elif 'lte:' in values[0]:
                    operator = '__lte'
                    value = (values[0][4:])
                elif 'gt:' in values[0]:
                    operator = '__gt'
                    value = values[0][3:]
                elif 'gte:' in values[0]:
                    operator = '__gte'
                    value = values[0][4:]
                else:
                    operator = ''
                    value = values[0]

                # Apply the filter to the queryset
                queryset = queryset.filter(Q(**{f"{field_name}{operator}": value}))
            if field_name=='search' :
                search_query = request.GET.get('search', '')
                if search_query:

                    q_objects = Q()

                    for field_name in view.filterset_fields:

        

                        q_objects |= Q(**{f"{field_name}__icontains": search_query})

        

                

        

                    # Apply the search filter to the queryset

        

                    queryset = queryset.filter(q_objects)

   
        
        return queryset
    

        
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = LimitOffsetPagination
    default_limit = 10
    max_limit = 100
    filter_backends = [CustomFilterBackend]  # Use the custom filtering backend
    filterset_fields = [
        'id', 'ItemNo', 'qnty', 'price', 'Description', 'Description2', 'SearchDescription', 'Blocked',
        'CompoundNumber', 'Material', 'Durometer', 'DurometerScale', 'DurometerRange', 'Color',
        'LowTemperature', 'FDACompliant', 'MaterialSubtype', 'Brand', 'MaterialNotes',
        'CrossSectionalGeometry', 'CrossSectionalDiameter', 'InsideDiameter', 'SizeAS568', 'SizeMetric',
        'SizeJIS', 'SizeStandard', 'Online'
    ]


# class MaterialSubtype(viewsets.ModelViewSet):
#     def list(self,request,material):
#         a = Product.objects.filter(Material=material)
#         queryset = Product.objects.all()
    