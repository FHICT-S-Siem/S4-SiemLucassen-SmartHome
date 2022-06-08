# S4-SiemLucassen-SmartHome

## About
This project focuses on finding & realizing creative 'smart home' ideas using IT Techniques featuring Machine Learning, web-applications and IoT devices.

## Technologies
I build the web application with React/NextJS so I could easily implement the API. <br>
- https://reactjs.org/
- https://nextjs.org/

The styling was done with the use of TailwindCSS and Flexbox layout. <br>
- https://tailwindcss.com/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

For the object detection model I used the pre-trained YOLOv5 model from [ultralytics](https://github.com/ultralytics/yolov5). The YOLO algorithm employs convolutional neural networks (CNN) to detect objects in real-time which is trained. YOLOv5 is trained on the COCO dataset containing roughly 330,000 images with 80 different labels. <br>
To run the model, I used PyTorch which is a open source machine learning framework to run the object detection on the model. <br>

- https://www.python.org
- https://pytorch.org/
- https://github.com/ultralytics/yolov5
<br>

## Project demo

The application is currently hosted on the cloud application platform: <br>
Production: https://smarthome-siem-s4.herokuapp.com <br>
Detection API: https://smarthome-siem-s4.herokuapp.com/api/detection

## Project board

I like to use GitHub project board to manage the development of my project, as it is easy to use for an agile environment. <br>

## Container diagram
![containerdiagram](https://user-images.githubusercontent.com/48807736/172719585-24bb5ee0-644f-4472-9c8e-cfa69832fdb2.png)

## Object detection demo with Yolov5

To show how easy it is to run this model in 'real-time', you could try out to run this code snippet out for yourself: <br>

```python
import torch
import numpy as np
import cv2

#Load Model (yolov5s)
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

# Set confidence treshold
model.conf = 0.45

# Only detect cats
model.classes = [15]

# sets videocapture to take the 1st camera
cap = cv2.VideoCapture(0) 

while cap.isOpened():
  ret, frame = cap.read()
  results = model(frame) 

  # shows detections in a window
  cv2.imshow('YOLOv5s', np.squeeze(results.render()))
  
  # reformats detections to pandas dataframe, to easily display the bounding boxes, confidence, and class type.
  df = results.pandas().xyxy[0]
```

