FROM nginx:alpine

# On copie le contenu du dossier build de Maud vers le dossier public de Nginx
COPY build/ /usr/share/nginx/html/

# On garde les images si elles sont dans un dossier à part
COPY screenshots/ /usr/share/nginx/html/screenshots/

EXPOSE 80