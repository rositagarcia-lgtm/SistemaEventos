from rest_framework.routers import DefaultRouter
from .views import OrganizadorViewSet, EventoViewSet

router = DefaultRouter()

router.register('organizadores', OrganizadorViewSet)
router.register('eventos', EventoViewSet)

urlpatterns = router.urls