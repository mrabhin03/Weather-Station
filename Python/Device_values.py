import random
device_values = {
        'values': [{
            'Max': 20,#default
            'Min': 10
        },
        {
            #Humidity
            'Max': 86,
            'Min': 78
        },{
            #Temperature
            'Max': 40,
            'Min': 28
        },{
            #Sound
            'Max': 30,
            'Min': 6
        },{
            #Co2
            'Max': 6,
            'Min': 1
        },{
            #Chance of Rain
            'Max': 75,
            'Min': 25
        },{
            #Wind Speed sensor
            'Max': 15,
            'Min': 7
        },{
            #NO2 Sensor
            'Max': 6,
            'Min': 1
        },{
            #Atmospheric Pressure
            'Max': 1015,
            'Min': 980
        },{
            #UV Sensor
            'Max': 10,
            'Min': 2
        },{
            #Wind Direction
            'Max': 360,
            'Min': 0
        },{
            #Air Quality
            'Max': 45,
            'Min': 10
        },
    ]}
time=[0,3,6,9,12,15,18,21,23]


datefrom=1
dateto=3
month=4

day=datefrom
while day<=dateto:
    temtime=0
    for j in time:
        i=1
        while i<=11:
            ThetimeH = random.randint(temtime, j)
            if ThetimeH==j and ThetimeH!=0:
               ThetimeH=ThetimeH-1
            ThetimeM = random.randint(1, 58)
            ThetimeS = random.randint(1, 58)
            maxvalue=device_values['values'][i]['Max']
            minvalue=device_values['values'][i]['Min']
            Thevalue = random.randint(minvalue, maxvalue)
            thedata=f" INSERT INTO `data_store`( `device_values`, `date_time`, `device_id`) VALUES ('{Thevalue}','2024-{month}-{day} {ThetimeH}:{ThetimeM}:{ThetimeS}','{i}');"
            print(thedata)
            i=i+1
        temtime=j
    day=day+1
