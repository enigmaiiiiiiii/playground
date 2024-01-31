#!/bin/bash

real() { echo "${1#./}"; }
real2() { echo "${1}"; }

real2 "./path/to/script.txt"

