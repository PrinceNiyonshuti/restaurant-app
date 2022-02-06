#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Staging-Deployment-01'
git push -f git@github.com:PrinceNiyonshuti/restaurant-app.git master:gh-pages

cd-
