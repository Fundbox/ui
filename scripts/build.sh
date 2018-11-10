#!/usr/bin/env bash
set -e

# Cleanup
rm -rf es dist

# ES build (es/)
declare -a types=("components" "directives" "validations")
for type in "${types[@]}"
do
  basename /src/"$type"/
  for element_path in src/"$type"/*/
  do
    if [ "$type" != "validations" ];
    then
      element_name=$(basename "$element_path")
    else
      element_name=""
    fi
    [ "$element_name" == "introduction" ] && continue
    NODE_ENV=production TYPE="$type" OUTPUT_DIRECTORY=es ELEMENT_NAME=$(basename "$element_name") webpack --config scripts/webpack.config.prod.js
  done
done
# DIST build (dist/)
NODE_ENV=production OUTPUT_DIRECTORY=dist webpack --config scripts/webpack.config.prod.js
