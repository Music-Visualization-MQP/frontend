# Thank you to: https://dev.to/massivebrains/use-same-dockerfile-for-dev-production-1l7f

FROM node:hydrogen-alpine AS base

WORKDIR /app
#COPY nginx.conf /etc/nginx/nginx.conf
COPY package*.json ./
RUN npm install
COPY . . 





FROM base AS dev
EXPOSE 4200
#RUN npm install -g typescript
#RUN npm intall -g @angular/cli
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]

# RUN ng build
FROM base AS build
RUN npm run build
# 
FROM nginx:stable-alpine3.20 AS prod

# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/supabase-frontend /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g" ]
#CMD [ "nginx", "-g", "daemon off;" ]
