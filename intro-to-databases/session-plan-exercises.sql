-- Exercise 2
-- 1. List the names and phones of all of the users

SELECT name, phone FROM user;



-- 2. List all of the users, ordering them by name alphabetically.

SELECT * FROM user ORDER BY name;



-- 3. Find the name of the user of id 10.

SELECT name FROM user WHERE id=10;



-- 4. Find 3 oldest (by create date) tasks.

SELECT * FROM task ORDER BY created ASC LIMIT 3;




-- Exercise 3
-- 1. Select all tasks which have status In progress.

SELECT * FROM task JOIN status ON task.status_id = status.id WHERE status.name = 'In progress';

-- 2. Display list of tasks with the user names of the users attached to the tasks.

SELECT task.title, user.name FROM task JOIN user ON task.user_id = user.id;






-- Exercise 4
-- 1. Add yourself as a new user in the user table

INSERT INTO user (name, email,phone) VALUES ('Danylo Mitenkov','danylomitenkov@gmail.com','457-843-2373');


-- 2. Create 2 or more tasks assigned to yourself

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Wash child', 'Wash our child', DATETIME('now'),DATETIME('now'), DATETIME('now', '+2 month'),1,13);

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Bring child', 'Bring our child', DATETIME('now'),DATETIME('now'), '2027-12-10',1,13);


-- 3. Update the task you just created to change its status to "In Progress" (status_id = 2)

UPDATE task SET status_id = 2, updated=DATETIME('now') WHERE title='Wash child';


-- 4. Retrieve only the title and description of all tasks assigned to you

SELECT task.title, task.description FROM task JOIN user ON task.user_id = user.id WHERE user.id = 13;

-- 5. Delete a task that you no longer need

DELETE FROM task WHERE title='Wash child';
