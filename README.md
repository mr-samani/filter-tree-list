# Filter Tree Array List

🎉 Filter tree list by key and expression function

## Demo: [demo](https://mr-samani.github.io/filter-tree-list/)

![npm bundle size](https://img.shields.io/bundlephobia/min/filter-tree-list?color=success&label=Size&logoColor=red)
![npm](https://img.shields.io/npm/dw/filter-tree-list?label=Downloads)



## Install
- NPM: npm i filter-tree-list
- YARN: yarn add filter-tree-list

## Usage
Import  `filterTreeList`  to your working files


```
import { arrayTreeFilter } from 'filter-tree-list';

 let records = arrayTreeFilter<TreeModel>(
        this.datasource,
        (x => x.title.toLowerCase().includes('foo')),
        {
          childrenKeyName: 'nodes'
        }
      );
```

* `this.datasource`: is your tree source 
* `(x => x.title.toLowerCase().includes('foo'))`: second parameter is your filter condition
* `{childrenKeyName: 'nodes'}` : this option is key name of tree source - default value is: `children`


## Author
💻Mohammadreza samani | FrontEnd Developer

[❤️Buy me a coffee 😉](https://www.buymeacoffee.com/mrsamani)

 
