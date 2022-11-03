#!/bin/bash

topic=$1

if [ -z "$topic" ]; then
    echo "Usage: $0 <topic>"
    exit 1
fi

cp -r ./chl-tpl ./challenges/$topic

# Write the capitalized topic as a headline into the readme.adoc
echo "= ${topic^}" > ./challenges/$topic/readme.adoc

code ./challenges/$topic/readme.adoc