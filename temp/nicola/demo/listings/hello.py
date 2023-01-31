#!/usr/bin/python

import sys


def hello(name='Clinton'):
    greeting = "hello " + name
    print(greeting)


if __name__ == "__main__":
    hello(*sys.argv[1:])
