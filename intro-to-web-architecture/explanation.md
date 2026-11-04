# Component Explanations

**Excalidraw Link:** [View interactive diagram](https://excalidraw.com/#json=avLm8i8ZqEImnbLq2fJd6,xqu58SyzlE2nEvsoEs_B8Q)

---

### Where is the recipe data stored?
The recipe data is permanently stored in a **Database** (e.g. MySQL) running on the server side. This ensures that the data is not lost when users close their browser, clear cache, or when the server restarts.

### How does the frontend communicate with the backend?
The frontend communicates with the backend over the network using **HTTP requests** (`GET`, `POST`, `PUT`, `DELETE`). The data is sent and received in **JSON** format.

### What happens when a user adds a new recipe?
1. The user fills out the form and clicks the "Add Recipe" button.
2. The frontend sends an HTTP `POST /recipes` request with the recipe details (title, ingredients, instructions) in JSON format to the backend.
3. The backend validates the input and inserts the new recipe into the database.
4. The database saves the recipe with an auto-generated ID and confirms success.
5. The backend responds with a `201 Created` status code and the saved recipe JSON.
6. The frontend receives the response and renders the new recipe on the screen.
