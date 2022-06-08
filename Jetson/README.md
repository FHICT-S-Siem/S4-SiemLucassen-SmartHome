# Setup RabbitMQ Locally:
```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

# Building the dockerfile
```
docker build -t registry.astro-boys.nl/siem/catdetector:latest -f .Dockerfile .
docker push registry.astro-boys.nl/siem/catdetector:latest


```

# Running the container on the Jetson Nano
```
docker pull registry.astro-boys.nl/siem/catdetector:latest
docker run -it --rm --network host --runtime nvidia registry.astro-boys.nl/siem/catdetector:latest
```

# Run in a bash to make use of the display 
# !/bin/bash 
```bash 
xhost +local: 

docker run -it --rm --runtime nvidia --network host --device /dev/video0:/dev/video0:mrw -e DISPLAY=$DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix registry.astro-boys.nl/siem/ultralytics:latest
```

# This works
```
docker pull nvcr.io/nvidia/l4t-ml:r32.6.1-py3
xhost +local:
docker run -it --rm --runtime nvidia --network host --device /dev/video0:/dev/video0:mrw -e DISPLAY=$DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-uni nvcr.io/nvidia/l4t-ml:r32.6.1-py3

# in the container install the other requirements
python3 -m pip install matplotlib==3.3.0 scikit-build opencv-python pandas Pillow PyYAML requests scipy tqdm seaborn

# enter python3
python3
>>> import torch
>>> torch.
```