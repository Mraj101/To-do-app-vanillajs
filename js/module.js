//creating a hardcoded db

/*var db=new Dexie("myDB");
db.version(1).stores({
    table:`name,age`
});
db.open();*/

// by creating a pure funtion
export const productdb = (dbName, tableName) => {
  const db = new Dexie(dbName);
  db.version(10).stores(tableName);
  db.open();

  return db;
};

