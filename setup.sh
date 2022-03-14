sudo pacman -Sy
sudo pacman -Sy nodejs-lts-gallium # node version 16.13.2
sudo pacman -Sy npm                # npm version 8.5.4
sudo npm install -g @angular/cli

cd backend
npm install

cd ../frontend
npm install