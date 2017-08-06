# How to Add Resources
Written by Omkar

### 1. Make a Resource object
In `data/` there's a file called `make_resource_data.py`.
It's a Python script one can use to create a resource object.
Run the script (e.g. `python3 make_resource_data.py` in terminal)
and fill in the form.

```bash
$ python3 data/make_resource_data.py
Title: 
Link:
Author:
Description:
Quote:
Categories:
```
For "Link: ", please exclude "https://" and "http://" from the link.
For "Categories: ", please list the categories with commas and spaces
(e.g. "Lorem, Ipsum, Lorem2"). These categories are defined in the
html page for resources, so if you want to include a new category then
you must add the category to the resource page's html file.


After the form is filled out, you should get the following response:

```bash
{
    "title": "Lorem Ipsum",
    "link": "lorem.ipsum.io",
    "author": "Lorem I. Psum",
    "description": [
        "Lorem ipsum lorem ipsum description"
    ],
    "quote": [
        "Lorem ipsum once lorem ipsum"
    ],
    "categories": [
        {"category": "Lorem"},
        {"category": "Ipsum"}
    ]
}
```
Copy the response to clipboard.

### 2. Add the Resource object

Paste the resource object in `data/resources.json`.
However, it should be pasted at the bottom of the list
of resources, NOT at the bottom of the page.

For example:

```json
        .
        .
        .
       {
            "title": "CompTIA CSA+",
            "link": "certification.comptia.org/certifications/cybersecurity-analyst",
            "author": "CompTIA",
            "description": [
                "Obtain certification in recognizing and thwarting security threats to advance your career in cybersecurity."
            ],
            "quote": [
                "CompTIA Cybersecurity Analyst (CSA+) is an international, vendor-neutral cybersecurity certification that applies behavioral analytics to improve the overall state of IT security. CSA+ validates critical knowledge and skills that are required to prevent, detect and combat cybersecurity threats. "
            ],
            "categories": [
                {"category": "Education"},
                {"category": "Certifications"}
            ]
        }, <--- ADD A COMMA
        { <--- OPENING BRACE OF RESOURCE OBJECT
            "title": "Lorem Ipsum",
            "link": "lorem.ipsum.io",
            "author": "Lorem I. Psum",
            "description": [
                "Lorem ipsum lorem ipsum description"
            ],
            "quote": [
                "Lorem ipsum once lorem ipsum"
            ],
            "categories": [
                {"category": "Lorem"},
                {"category": "Ipsum"}
            ]
        } <--- CLOSING BRACE
    ]
}
```

### 3. Update the Resources Page 

Install {{mustache}}'s CLI:

https://www.npmjs.com/package/mustache

Run `mustache -p mustaches/resource_card.mustache \
data/resources.json mustaches/resources_cards_list.mustache > html/resources_cards_list.html`.
The resource page is using {{mustache}} so this will
build the resource page with all resources listed
in the `data/resources.json` file.

### Questions?
Ask Omkar