from rest_framework import serializers
from .models import Organizador, Evento


class OrganizadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizador
        fields = '__all__'


from rest_framework import serializers
from .models import Organizador, Evento


class OrganizadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizador
        fields = '__all__'


class EventoSerializer(serializers.ModelSerializer):
    organizador_nombre = serializers.CharField(
        source='organizador.nombre',
        read_only=True
    )

    class Meta:
        model = Evento
        fields = [
            'id',
            'nombre',
            'fecha',
            'lugar',
            'imagen',
            'organizador',
            'organizador_nombre'
        ]