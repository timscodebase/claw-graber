/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4nym32upmj1b82a",
    "created": "2024-06-24 23:03:59.828Z",
    "updated": "2024-06-24 23:03:59.828Z",
    "name": "balls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "astnfwy6",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4nym32upmj1b82a");

  return dao.deleteCollection(collection);
})
