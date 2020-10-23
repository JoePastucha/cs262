-- Get the number of Game records.
SELECT *
FROM Game
ORDER BY time DESC
  ;

--Retrieve all the games that occurred in the past week.
SELECT *
FROM Game
WHERE (time >= DATE_TRUNC('week', CURRENT_TIMESTAMP - interval '1 week'))
    ;

-- Get all the users with non NULL names
SELECT *
FROM Player
WHERE name IS NOT NULL
--

-- Get playerID for scores greater then 2000.
SELECT playerID
FROM PlayerGame
WHERE score > 2000
    ;

-- Get the player with a gmail email
SELECT name
FROM Player
WHERE emailaddress LIKE '%gmail%'


-- Retrieve all “The King”’s game scores in decreasing order.
SELECT score
FROM PlayerGame, Player
WHERE PlayerGame.playerID = player.ID
AND name = 'The King'
ORDER BY score DESC
  ;

--Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
SELECT name
FROM Game, PlayerGame, Player
WHERE game.ID = gameID
AND player.ID = playerID
AND time = '2006-06-28 13:20:00 +0000'
ORDER BY score DESC LIMIT 1
    ;

-- C. Makes sure you dont get the same row twice/ selecting unique records
-- D. You could for example use this in a company. You could have a table with all employees.
--    However, an employee you could also be a boss of another employee. This could be used
--    as a join to give each employee to connect with other employees.