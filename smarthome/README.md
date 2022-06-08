# S4-SiemLucassen-SmartHome

## About
This project focuses on finding & realizing creative 'smart home' ideas using IT Techniques featuring Machine Learning, web-applications and IoT devices.

## Technologies
I built the web application with React/NextJS, mainly so I could easily implement the API. <br> NextJS lets you build server-side rendering and static web applications using React. <br>
- https://reactjs.org/
- https://nextjs.org/

The styling was done with the use of TailwindCSS and Flexbox layout.<br>
- https://tailwindcss.com/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/

For the object detection model I used the pre-trained YOLOv5 model from [ultralytics](https://github.com/ultralytics/yolov5). The YOLO algorithm employs convolutional neural networks (CNN) to detect objects in real-time which is trained. <br>
- https://www.section.io/engineering-education/introduction-to-yolo-algorithm-for-object-detection/
- https://github.com/ultralytics/yolov5
<br>
YOLOv5 is trained on the COCO dataset containing roughly 330,000 images with 80 different labels. <br>
To run the model, I used PyTorch which is an open source machine learning framework to run the object detection on the model. <br>

- https://www.python.org
- https://pytorch.org/

## Hardware
Using Docker, I push and run my object detection script on the Jetson Nano, to detect cats with the mounted camera. <br>
A problem I came across when running the object detection model on a Jetson, is to make use of the CUDA (GPU), instead of the CPU when detecting objects.<br> 
You will have to flash your Jetson with a JetPack SDK corresponding with the CUDA version you want to use.<br>

If you want to run CUDA on the Jetson, you could make use of the l4t-pytorch images, containing Pytorch and torchvision pre-installed in a 3.6 Python environment. You will also have to make sure to maintain the correct python library/module versions as some libraries won't work in particular python versions.<br>
- https://catalog.ngc.nvidia.com/orgs/nvidia/containers/l4t-pytorch


## Project demo

The application & database are currently hosted on the cloud application platform Heroku: <br>
Production: https://smarthome-siem-s4.herokuapp.com <br>
Detection API: https://smarthome-siem-s4.herokuapp.com/api/detection

## Project board

I like to make use of the GitHub project board to manage the development of my project, as it is easy to use for an agile environment. <br>
I made user-story and spike templates, to effeciently implement new features for my project on the board.<br>
![afbeelding](https://user-images.githubusercontent.com/48807736/172728831-93051207-a6ae-46f5-8e55-05272590dfbf.png)

Example:![afbeelding](https://user-images.githubusercontent.com/48807736/172729159-fe97f73f-a083-4944-bf2a-4b9ca7335b9e.png)

- https://github.com/FHICT-S-Siem/S4-SiemLucassen-SmartHome/projects/1


## Container diagram
![containerdiagram](https://user-images.githubusercontent.com/48807736/172719585-24bb5ee0-644f-4472-9c8e-cfa69832fdb2.png)

## Object detection demo with Yolov5

To show how easy it is to run the yolov5 model in 'real-time', you could try out to run this code snippet out for yourself: <br>

```python
import torch
import numpy as np
import cv2

# setting device on GPU if available, else CPU
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

#Load model(yolov5s) from ultralytics repo
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

# Set confidence threshold
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

