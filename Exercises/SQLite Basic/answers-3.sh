"SELECT Name FROM students"

"SELECT * FROM students WHERE Age > 30"

"SELECT name FROM students WHERE Gender = 'F' AND Age > 30"

"SELECT Points FROM students WHERE name = 'Alex'"

"INSERT INTO students(ID, Name, Age, Gender, Points )
VALUES (NULL, 'BASEM', '30', 'M', '130')
select * from students"

"UPDATE students
SET Points = '500'
WHERE ID = 2;"

"UPDATE students
SET Points = '190'
WHERE ID = 1;"

"INSERT INTO graduates ( Name, Age, Gender, Points)
SELECT Name, Age, Gender, Points FROM students WHERE name = 'Layal';"

"UPDATE graduates
SET 
    Graduation = '09/08/2018'
WHERE
    ID = 1;"

"DELETE from students WHERE id = 4;"     

"CREATE TABLE staff(
Name TEXT,
Company TEXT);"

"ALTER TABLE staff
ADD date date;"

"SELECT Name FROM employees
WHERE Role='Graphic Designer';"

"select Name
from students
where Points = (
    select max(Points)
    from students
)"

"SELECT avg(Points) FROM students;"

"SELECT Name FROM students WHERE Points = '500';"

"SELECT Name from students where Name like '%s%';"

"SELECT * FROM students
ORDER BY Points DESC;"






