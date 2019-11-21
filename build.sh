#!/usr/bin/env bash
set -e # halt script on error

bundle install
JEKYLL_ENV=production bundle exec jekyll build
#bundle exec htmlproofer ./_site --disable-external
