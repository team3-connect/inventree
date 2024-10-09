# MVP Inventory Management Application

## Tier I: MVP Application

### View All Items in Inventory

- Sequelize Model for Item
- Attributes: Name, Description, Price, Category, Image
- Express Route to GET all Items
- `GET /api/items`
- Front-end View for all Items
- Displays all inventory items to the user ### View an Individual Item
- Express Route to GET one Item
- `GET /api/items/:id`
- Front-end View for one Item
- Click to see detailed view of a specific item

## Tier II: Adding an Item ### Adding an Item

- Front-end form to Add an Item
- Form to input Name, Description, Price, Category, Image
- Express Route to ADD the Item
- `POST /api/items`
- Form or Fetch request to add item when form is submitted
- Submits the new item to the backend

## Tier III: Deleting an Item

### Removing an Item from Inventory

- Delete Button on Single Item View
- Button to remove the item
- Express Route to DELETE the Item
- `DELETE /api/items/:id`
- \*\*Fetch Request to Delete Item when Bu
