FROM node:14.5.0-alpine3.11

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm install --global typescript

RUN npm install -g ts-node

RUN yarn && yarn cache clean

USER node

WORKDIR /home/node/server2


# CMD yarn dev
ENTRYPOINT [ "./init.sh" ] 