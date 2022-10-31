#!/bin/bash

folder=$1

if [ -z "$folder" ]; then
    echo "Usage: $0 <folder>"
    exit 1
fi

cp -r ./chl-tpl ./challenges/$folder

code ./challenges/$folder/readme.adoc