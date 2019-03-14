#!/usr/bin/env bash
set -e # halt script on error

bundle install
bundle exec jekyll build
ls assets
ls assets/dist
#bundle exec htmlproofer ./_site --disable-external
