
GET_USER_STAT_QUERY = '''
SELECT u.email, us.clear_count, us.login_time
FROM USERS u FULL JOIN USERS_STAT us
ON u.email = us.email
WHERE us.clear_count = (SELECT MAX(t2.clear_count) FROM USERS_STAT t2 WHERE t2.email = (%s))
'''
INSERT_SESSION_DATA_QUERY = '''
INSERT INTO USERS_STAT (email, login_time, time_spent, clear_count) values (%s, %s, %s, %s)
'''

GET_LEADERBOARD_QUERY = '''
SELECT email, clear_count, login_time from users_stat ORDER BY clear_count DESC LIMIT 10;
'''