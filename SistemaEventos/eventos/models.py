from django.db import models


class Organizador(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre


class Evento(models.Model):
    nombre = models.CharField(max_length=100)
    fecha = models.DateField()
    lugar = models.CharField(max_length=150)
    imagen = models.ImageField(upload_to='eventos/')

    organizador = models.ForeignKey(
        Organizador,
        on_delete=models.CASCADE,
        related_name='eventos'
    )

    def __str__(self):
        return self.nombre