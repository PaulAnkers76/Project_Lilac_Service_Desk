import pyodbc

print(pyodbc.drivers())

conn = pyodbc.connect(
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=localhost;"
    "DATABASE=ServiceDesk;"
    "Trusted_Connection=yes;"
)

cursor = conn.cursor()

cursor.execute(
    "SELECT COUNT(*) FROM servicedesk.WorkItems"
)

print(cursor.fetchone())