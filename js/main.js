import { productdb } from './Module.js'
import {sum} from './Module.js'
productdb("productdb", {
  products: `++id,name,seller,price`,
});

console.log(sum());