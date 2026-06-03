from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Organizador, Evento
from .serializers import OrganizadorSerializer, EventoSerializer


class OrganizadorViewSet(viewsets.ModelViewSet):
    queryset = Organizador.objects.all()
    serializer_class = OrganizadorSerializer


class EventoViewSet(viewsets.ModelViewSet):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer

    parser_classes = (
        MultiPartParser,
        FormParser,
    )