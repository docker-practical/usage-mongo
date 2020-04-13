db.createUser({
  user: "hugo",
  pwd: "hugo",
  roles: [ { role: "readWrite", db: "dbsample" } ]
})

db.dbsample.insert({
  name: 'first record'
})
