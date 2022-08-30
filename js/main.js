import productdb,{
  bulkcreate
} from './Module.js'

productdb("productdb", {
  products: `++id,name,seller,price`,
});


//input tags
const userid=document.getElementById('userid');
const proname=document.getElementById('productname');
const seller=document.getElementById('seller');
const price=document.getElementById('price');

//btn create
const btncreate=document.getElementById('btn-create');
const btnread=document.getElementById('btn-read');
const btnupdate=document.getElementById('btn-update');
const btndelete=document.getElementById('btn-delete');

//insert value using create button
btncreate.onclick=(event)=>{
  let flag=bulkcreate(productdb.products,{
    name:proname.value,
    seller:seller.value,
    price:price.value,
  })
  console.log(flag);
}
