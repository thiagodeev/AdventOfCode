#!/bin/bash

#Script to run a challenge with Node typing only the folder name, or both folder and file name.

alert() { 
  echo "You need to pass either a folder name or both a folder and a file name.";
  echo "Ex: ./start.sh folderName";
  echo "Ex: ./start.sh folderName fileName"
};

if [ -z $1 ]; then
  alert;
  exit 1
fi

cd $(pwd)/$1

if [ -z $2 ]; then
  node index.js
else
  node ./$2
fi

exit 0