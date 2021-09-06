更新Ghost版本的办法：

1. 
export blog content

2. 
docker stop my-ghost

docker rename my-ghost my-ghost-old

docker pull ghost:latest

docker run -d --name my-ghost -p 8080:2368 -d ghost:latest

3. 
visit ghost and create account

clear posts

4. 
import blog content

5. 
cp -r /var/lib/docker/vfs/dir/4f28396de6b3c876878d27642fd793af8ed4bdbba9954c2d4c748b2891a3d255/images

6. 
docker exec -it my-ghost bash

edit config.development.json and config.production.json in /var/lib/ghost with command: cat < config.production.json


更新Theme的办法

vi /var/lib/docker/vfs/dir/a5fd907fb894a0f271c35ce8075950ac731c6fa57688c92922512e658eb54225/themes/biosvision--2-/default.hbs
