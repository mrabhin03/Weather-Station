# Generated by Django 5.0 on 2024-02-28 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Station', '0003_rename_datetime_data_store_date_time_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'Admin',
            },
        ),
    ]
