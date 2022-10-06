#!/usr/bin/env bash

# Find and replace package version in readme installation instructions
PACKAGE_VERSION=$1
sed -i "" "s/\(image-proxy.git#v\)[0-9][0-9]*.[0-9][0-9]*.[0-9][0-9]*/\1$PACKAGE_VERSION/" README.md