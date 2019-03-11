#!/usr/bin/env bash
set -e # halt script on error

bundle install jekyll html-proofer
bundle exec jekyll build
bundle exec htmlproofer ./_site
