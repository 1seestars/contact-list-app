#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
git push -f git@github.com:1seestars/1seestars.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:1seestars/contact-list-app.git master:gh-pages

cd -