<!-- This content will not appear in the rendered Markdown 
# A first-level heading
## A second-level heading
### A third-level heading
**BOLD** __BOLD__
*italics* _italics_
~~strikethrough~
**_bolditalic_ bold**
***allbolditalic***
<sub> subscript </sub>
<sup> superscript </sup>
> And I quote.
`git status` quotes code using ticks

block code:
```
git status
git add
git commit
```
The background color is `#ffffff` for light mode and `#000000` for dark mode.
This site was built using [GitHub Pages](https://pages.github.com/).
can link to other sections and parts inside rendered file like in Notion.

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

can theme images

unordered lists
- George Washington
* John Adams
+ Thomas Jefferson
ordered lists
1. James Madison
2. James Monroe
3. John Quincy Adams
nested lists
1. First list item
   - First nested list item
     - Second nested list item
task lists
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada: <- emoji
@ mentions people or teams

> [!NOTE]
> Hi
 
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.
-->
# AWS information
* [instance](http://3.93.166.106)
* [instance_updated](https://morsedecoder.click)
* console ssh connect command = 
```
ssh -i ~/OneDrive/Desktop/byu24-25/CS_260/mcwhertor.pem ubuntu@3.93.166.106
ssh -i ~/OneDrive/Desktop/byu24-25/CS_260/mcwhertor.pem ubuntu@morsedecoder.click
```
# Startup Ideas
* ultimate rock paper scissors
* morse decoder
* Mom's recipe book
* Dad's album
# Domain
* Route 53
* morsedecoder.click
* empty name file type A
* "*" name file type A
# 9/12/2024
* Development environment: local computer used to edit site
  - VS code
  - Console
  - Git
  - Github
* Production environment: currently running site on the cloud
  - EC2
  - Caddy
  - AWS
  - HTTPS
  - Web services
    - MongoDB
  - Route 53
# 9/17/2024 Simon HTML
In order to clone and then deploy simon on my site ->
while in simon-html ->
```
git clone https://github.com/webprogramming260/simon-html.git
./deployFiles.sh -k ../mcwhertor.pem -h morsedecoder.click -s simon
```
# 9/23/2024 CSS Intro
CSS takes HTML and makes it pretty and interactive.
- **rulesets:** rules
   - **selecter:** selects element to apply style rule to
   - **declarations:** represent the **property** to style with the given **property value**
```
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```
p = selector
<br />
font-family, font-size, color, text-shadow = declarations
## Associating CSS with HTML
1. use **style** element to explicitly assign >=1 declarations
2. use **style** element to define CSS rules within HTML doc (in head element of html)
3. use **link** element to connect to CSS file with the rules (in head element of html)
   - Generally the best
## Cascading Styles
When making declarations, the most "inside" a declaration is in the doc makes it the highest priority.
## Box model
1. Content (text/image)
   - By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.
2. Padding (background color)
3. Border (color, thickness, line style)
4. Margin (whitespace)
