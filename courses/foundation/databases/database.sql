-- 1 how many tasks in table
SELECT
    count(id) as count_of_rows
FROM
    task;

-- 2 how many task have invalid due dates
SELECT
    count(id) as not_valid_dates
FROM
    task
WHERE
    due_date is null;

-- 3 find the task that are marked as done
SELECT
    *
FROM
    task
    INNER JOIN status ON status.id = task.status_id
    AND status.name = "Done";

-- 4 Find all the tasks that are not marked as done.
SELECT
    *
FROM
    task
    INNER JOIN status ON status.id = task.status_id
    AND status.name != "Done";

-- 5 Get all the tasks, sorted with the most recently created first.
SELECT
    *
FROM
    task
ORDER BY
    created;

-- 6 Get the single most recently created task.
SELECT
    *
FROM
    task
ORDER BY
    created DESC
limit
    1;

-- 7 Get the title and due date of all tasks where the title or description contains database.
SELECT
    title,
    due_date
FROM
    task
WHERE
    title LIKE "%database%"
    OR description like "%database%";

-- 8 Get the title and status (as text) of all tasks.
SELECT
    title,
    status.name
FROM
    task
    inner join status on status.id = task.status_id;

-- 9 Get the name of each status, along with a count of how many tasks have that status.
SELECT
    COUNT(task.status_id) AS task_have_status,
    name
FROM
    status
    INNER JOIN task on task.status_id = status.id
GROUP BY
    status.id;

-- 10 Get the names of all statuses, sorted by the status with most tasks first.
SELECT
    status.name
FROM
    status
    INNER JOIN task on task.status_id = status.id
GROUP BY
    status.id
ORDER BY
    COUNT(task.status_id) DESC;