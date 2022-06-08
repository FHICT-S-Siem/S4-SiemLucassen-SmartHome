from copy import copy
from datetime import datetime
from math import e
import torch
import requests
import cv2
import numpy as np
from matplotlib import pyplot as plt
from datetime import timedelta
from detection import Detection
import _utils

# setting device on GPU if available, else CPU
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print('Using device:', device, '\n')

#Additional Info when using cuda
if device.type == 'cuda':
    print(torch.cuda.get_device_name(0))
    print('Memory Usage:')
    print('Allocated:', round(torch.cuda.memory_allocated(0)/1024**3,1), 'GB')
    print('Cached:   ', round(torch.cuda.memory_reserved(0)/1024**3,1), 'GB')

#Load Model (yolov5s)
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

# Set confidence treshold
model.conf = 0.5
# Only detect cats
model.classes = [15]

# Get environment variables
API_URL, SECRET_KEY = _utils.get_env(['API_URL', 'SECRET_KEY'])

def is_cat_detected_within_last_minute(dt_last_cat_detection):
    return (dt_last_cat_detection + timedelta(seconds=10)) > datetime.now()


while True:
    try:
        # sets camera
        cap = cv2.VideoCapture(1, cv2.CAP_DSHOW)
        print("Camera connected")
        dt_last_cat_detection = datetime.now() + timedelta(seconds=10)

        while cap.isOpened():
            # break script when 'q' is pressed
            if cv2.waitKey(10) & 0xFF == ord('q'):
                break
            ret, frame = cap.read()
            
            # checks frames if any objects exist
            results = model(frame) 

            # shows detections in window
            cv2.imshow('YOLOv5s', np.squeeze(results.render()))   

            # reformats detections to pandas dataframe
            df = results.pandas().xyxy[0]
            # if empty continue with next frame
            if (df.empty): 
                # else send detection data
                continue
            # print('cat detected')
            if (is_cat_detected_within_last_minute(dt_last_cat_detection)):
                # print('skip')
                continue
            print('posting detected cat:')
            dt_last_cat_detection = datetime.now()
            
            data = Detection(df, results.render()[0])      
            res = requests.post(
                url=API_URL, 
                # to get the image with bounding box use: results.render()[0]
                data=data.json_serialize(), 
                headers={"Authorization": SECRET_KEY, "Content-Type": "application/json"})

            print(
				f'[ status: {res.status_code} ]' +
				f'[ {data.detectedAt} ]' +
				f'[ object(s): {(data.objects)} ]'
            )
    except Exception as e:  
        cap.release()
        cv2.destroyAllWindows()
        print(e)
        continue
¥


