#!/usr/bin/env bash

function usage() {
  echo "Usage : $0 ASY_BUILD_MD_DIR HEXO_SOURCE_DIR"
  echo 'Synchronize the Asymptote build directory ASY_BUILD_MD_DIR to Hexo source directory HEXO_SOURCE_DIR'
  echo 'The parameters are passed to the rsync command, so you can all syntax supported by rsync.'
}

if [ "$#" -ne 2 ]; then
  echo "Exactly two arguments are required."
  usage
  exit 1
fi

ASY_MD_DIR=$1%/ # Remove trailing slash if present
HEXO_SOURCE_DIR=$2%/
ASY_MD_DIR="${ASY_MD_DIR}/"           # Be sure it ends by slash
HEXO_SOURCE_DIR="${HEXO_SOURCE_DIR}/" # Be sure it ends by slash

ASY_MEDIA_DIR="${ASY_MD_DIR}media/asymptote/"
ASY_PAGE_DIR="${ASY_MD_DIR}page/"
ASY_POST_DIR="${ASY_MD_DIR}post/"

HEXO_PAGE_DIR="${HEXO_SOURCE_DIR}asymptote/"
HEXO_MEDIA_DIR="${HEXO_SOURCE_DIR}media/asymptote/"
HEXO_POST_DIR="${HEXO_SOURCE_DIR}_posts/en/asymptote/"

for dir in "$ASY_MD_DIR" "$ASY_MEDIA_DIR" "$ASY_PAGE_DIR" "$ASY_POST_DIR"; do
  [ -e "$dir" ] || {
    echo "Directory does not exist : $dir"
    echo 'Process oborted !'
    exit 1
  }
done

rsync -auv --delete "$ASY_MEDIA_DIR" "$HEXO_MEDIA_DIR"
