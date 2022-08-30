//creating a hardcoded db

/*var db=new Dexie("myDB");
db.version(1).stores({
    table:`name,age`
});
db.open();*/

// by creating a pure funtion
const productdb = (dbName, tableName) => {
  const db = new Dexie(dbName);
  db.version(10).stores(tableName);
  db.open();

  return db;
};

const bulkcreate=(tableName,data)=>{
 tableName.bulkAdd([data]);
 let flag=empty(data);
 if(flag)
  console.log("Inserted successfully");
 else 
  console.log("please provide data");

  return flag;
};

//check text box validation

const empty= object=>{
  let flag=false;
  for(const value in object){
    if(data[value]!="" && object.hasOwnProperty(value)){
      flag=true;
    }
  }
  return flag;
};

export default productdb;
export{
  bulkcreate
}