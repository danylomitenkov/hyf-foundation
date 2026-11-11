-- 1. Count the tasks
SELECT COUNT(*) FROM task;


-- 2. Count tasks without valid due dates
SELECT COUNT(*) FROM task WHERE datetime(due_date) IS NULL


-- 3. Return all columns of tasks marked Done.
SELECT * FROM task WHERE task.status_id = 3;


-- 4. Return all columns of tasks not marked Done.
SELECT * FROM task WHERE task.status_id != 3;


-- 5. Return all columns of every task, ordered by creation date with the most recent first.
SELECT * FROM task ORDER BY task.created DESC;


-- 6. Return all columns of the single most recently created task.
SELECT * FROM task ORDER BY task.created DESC LIMIT 1;


-- 7. Return the title and due date of tasks whose title or description contains 'database', ignoring case. Column order: title, due_date.
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';


-- 8. Return every task's id and title. Column order: id, title. Order by id ascending.
SELECT id, title FROM task ORDER BY id ASC;


-- 9. Return the id and title of tasks with status_id 2. Column order: id, title. Order by id ascending.
SELECT id, title from task WHERE status_id = 2 ORDER BY id ASC;


-- 10. Return the id and title of tasks whose due_date is NULL. Column order: id, title. Order by id ascending.
SELECT id, title FROM task WHERE due_date is NULL ORDER BY id ASC;


-- 11. Return each task's id and title, ordered by title alphabetically (A to Z). Column order: id, title.
SELECT id, title FROM task ORDER BY title ASC;


-- 12. Return the id and title of the five tasks with the highest IDs, highest ID first. Column order: id, title.
SELECT id, title FROM task ORDER BY id DESC LIMIT 5; 


-- 13. Return the id and title of tasks with no assigned user (user_id is NULL). Column order: id, title. Order by id ascending.
SELECT id, title FROM task WHERE user_id IS NULL ORDER BY id;


-- 14. Change the title of task id 1 to 'Wash the laundry'. Update only that task and no other columns.
UPDATE task SET title = 'Wash the laundry' WHERE id = 1;


-- 15. Set status_id to 3 for task id 22 only. Leave every other task unchanged.
UPDATE task SET status_id = 3 WHERE id = 22;


-- 16. Assign task id 23 to user id 11 by setting user_id to 11. Change no other rows or columns.
UPDATE task SET user_id = 11 WHERE id = 23;


-- 17. Set status_id to 1 for tasks whose user_id is NULL. These are task ids 23 and 35; change no other rows or columns.
UPDATE task SET status_id = 1 WHERE user_id IS NULL;


-- 18. DELETE FROM task WHERE id = 35;
DELETE FROM task WHERE id = 35;


-- 19. Remove the Personal tag association (tag_id 2) from task id 1 only. Do not delete the task or any other tag association.
DELETE FROM task_tag WHERE task_id = 1 AND tag_id = 2;


-- 20. Create a table named task_note with columns in this order: id INTEGER PRIMARY KEY, task_id INTEGER NOT NULL, note TEXT NOT NULL. Add a foreign key from task_id to task(id).
CREATE TABLE task_note (
    id INTEGER PRIMARY KEY,
    task_id INTEGER NOT NULL,
    note TEXT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES task(id)
);

