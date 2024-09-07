FROM node:20.17-alpine3.20 as build

WORKDIR /app
#COPY nginx.conf /etc/nginx/nginx.conf

COPY . . 

RUN npm install

RUN npm run build

# RUN npm install -g typescript

# RUN npm intall -g @angular/cli

# RUN ng build

# 
FROM nginx:stable-alpine3.20

# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/supabase-frontend /usr/share/nginx/html

