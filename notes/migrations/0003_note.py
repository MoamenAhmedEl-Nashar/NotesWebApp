# Generated by Django 3.0.3 on 2020-02-27 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0002_user_region'),
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('content', models.TextField()),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
                'db_table': 'Note',
                'managed': True,
            },
        ),
    ]