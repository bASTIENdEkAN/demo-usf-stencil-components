
# Starter Slicing • R+S
__Source:__ [documentation](https://docs.google.com/document/d/1nCR0h5pYG8729_oQzI9mimfXB9z39z0bdPOUzzYKNhs/edit?usp=sharing)
## __1__ Download the starter and create you’re repo.
First go [here](https://bitbucket.org/riseandshinebxl/starter-slicing_basic/src/master/) and click to __clone__ and copy the __[displayed url]__.
Now execute theses commands in the terminal:
```
git init
git remote add fork [displayed url]
git fetch fork
git pull fork master
```

Secondly go on [bitbucket](https://bitbucket.org/riseandshinebxl) and create a new repository (workspace RiseandShine). 

Click to __clone__ and copy the __[displayed url of your new project]__.
Now execute theses commands in the terminal:
```
git remote add origin [displayed url of your new project]  
git push -u origin master -f
```

Yeah !! Now you can work with peace of mind.

## __2__ Installation
Execute theses commands in the terminal:
```
npm i
composer update
```

## __3__ Process
Execute this command to start your slicing:
```
npm run dev
```
Execute this command to compile your slicing (be careful to respect [the instructions for integrations in selligent & Sallesforce](https://docs.google.com/document/d/12qcDytURDtPUl_YhdDd3GrDLdeG1z4KHon_RxmKPDRQ/edit#)):
```
npm run production
```

# All starter aviable
The basic starter is the lightest and easiest to use, its structure has been revised to simplify development.
> Please consider creating your own starter to have an optimized workflow.

1.  Basic: [starter-slicing_basic](https://www.google.com/url?q=https://bitbucket.org/riseandshinebxl/starter-slicing_basic/src/master/&sa=D&source=editors&ust=1614186886021000&usg=AOvVaw0DJ7XZpOJAn90ajKZqLRZk)
2.  Global: [starter-slicing_global](https://www.google.com/url?q=https://bitbucket.org/riseandshinebxl/starter-slicing_global/src/master/&sa=D&source=editors&ust=1614186269643000&usg=AOvVaw1A6jJ__3uxxGk1qEA5C96c)
3.  Renault & Dacia: [starter-slicing_renault-dacia](https://bitbucket.org/riseandshinebxl/starter-slicing_renault-dacia/src/master/)

# Features & Framework
## Blade
Blade is the simple, yet powerful templating engine… 
[https://laravel.com/docs/7.x/blade](https://laravel.com/docs/7.x/blade)

## SCSS
CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Scss lets you use features that don't exist in CSS yet like…

[https://sass-lang.com/guide](https://sass-lang.com/guide)

## BULMA
Bulma is a free, open source CSS framework based on Flexbox and used by more than 200,000 developers. 
At R+S we only use certain global components such as: column, utilities, button, container, content, form, helpers.
Feel free to use more compoenent from bulma if need.

[https://bulma.io/](https://bulma.io/)

## Bouncer
Reasonable System for CSS Stylesheet Structure.
A set of simple ideas to guide your process of building maintainable CSS.
> Note: Consider to use “is-modifier” var instead of “-modifier”

[https://rscss.io/index.html](https://rscss.io/index.html)