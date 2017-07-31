#!/usr/bin/python3

# This is used to easily make a JSON object for a resource

title = input("Title: ")
link = input("Link: ")
author = input("Author: ")
description = input("Description: ")
quote = input("Quote: ")
categories = input("Categories: ") # Use ", " as a delimiter
categories = categories.split(", ")

'''
{
    "title": "",
    "link": "",
    "author": "",
    "description": [
        ""
    ],
    "quote": [
        ""
    ],
    "categories": [
        {"category": ""},
        {"category": ""},
        {"category": ""},
        {"category": ""}
    ]
}
'''

print("Copy and Paste the following: \n")

tab = " " * 4
print("{")
print(tab + "\"title\": \"" + title + "\"," )
print(tab + "\"link\": \"" + link + "\"," )
print(tab + "\"author\": \"" + author + "\"," )
print(tab + "\"description\": [\n" + tab * 2 + "\"" + description + "\"\n"+ tab + "]," )
print(tab + "\"quote\": [\n" + tab * 2 + "\"" + quote + "\"\n"+ tab + "]," )
print(tab + "\"categories\": [")
for c in range(len(categories)):
    if c < len(categories) - 1:
        print(tab * 2 + "{\"category\": \"" + categories[c] + "\"}" + ",")
    else:
        print(tab * 2 + "{\"category\": \"" + categories[c] + "\"}")
print(tab + "]\n" + "}")

print("\n")
