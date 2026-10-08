---
title: Exmaple
---

---
title: Markdown & Wiki Formatting Guide

prev:
  text: Home
  link: /index
---

# Markdown & Wiki Formatting Guide

This page demonstrates the formatting commonly used throughout the **Farming And Friends Wiki**.

Use this page as a reference when creating or submitting new wiki pages.

---

## 1. Headers

Headers are used to organise information into sections.

**Main Header**
```md
# Main Header
```
**Subheader**
```md
 ## Subheader
```
**Smaller Subheader**
```md
### Smaller Subheader
```
Example:

# Main Header
## Subheader
### Smaller Subheader

2. Text Formatting
Bold
**This text is bold**
```md
**This text is bold**
```
Italic
*This text is italic*
```md
*This text is italic*
```
Bold & Italic
***This text is bold and italic***
```md
***This text is bold and italic***
```
Strikethrough
~~This text is crossed out~~
```md
~~This text is crossed out~~
```

3. Lists
Bullet List
```md
- Item 1
- Item 2
- Item 3
```
Example:

- Item 1
- Item 2
- Item 3

Numbered List
```md
1. First item
2. Second item
3. Third item
```md

Example:

1. First item
2. Second item
3. Third item

Nested List
```md
- Main item
  - Sub item
  - Sub item
- Another item
```
Example:

- Main item
    - Sub item
    - Sub item
- Another item

4. Links
External Link
```md
[Visit Roblox](https://www.roblox.com/)
```
Example:

[Visit Roblox](https://www.roblox.com/)

Internal Wiki Link

When linking to another page on the wiki, use the page's internal path.
```md
[AnimalCo](../Shops/AnimalCo/animalco)
```
For example:

[AnimalCo](../docs/Main/Main/GeneralKnowledge/Shops&Landmarks/Shops/animalco.md)

Tip: Internal links should be used whenever linking to another page on the wiki.

5. Tables

Tables are useful for displaying prices, statistics, requirements and other structured information.

Basic Table
```md
| Item | Price |
| --- | ---: |
| Chicken | $1,500 |
| Cow | $4,500 |
| Sheep | $3,000 |
```
This will display as:

| Item | Price |
| --- | ---: |
| Chicken | $1,500 |
| Cow | $4,500 |
| Sheep | $3,000 |

Three-Column Table
```md
| Item | Price | Requirement |
| --- | ---: | --- |
| Chicken | $1,500 | Animal Trailer |
| Cow | $4,500 | Animal Trailer |
| Sheep | $3,000 | Animal Trailer |
```
Example:

| Item | Price | Requirement |
| --- | ---: | --- |
| Chicken | $1,500 | Animal Trailer |
| Cow | $4,500 | Animal Trailer |
| Sheep | $3,000 | Animal Trailer |

Table Alignment


Left aligned:
```md
| Item |
| :--- |
```
Centred:
```md
| Item |
| :---: |
```
Right aligned:
```md
| Item |
| ---: |
```
For prices, right alignment is recommended.