#!/usr/bin/env bash
set -e # halt script on error

gem install jekyll html-proofer
bundle exec jekyll build
bundle exec htmlproofer ./_site --disable-external
