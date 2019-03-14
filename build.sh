#!/usr/bin/env bash
set -e # halt script on error

bundle install
bundle exec jekyll build
cp -r assets/dist/* _site/assets/dist
ls _site/assets/dist
#bundle exec htmlproofer ./_site --disable-external
