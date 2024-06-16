curl -X GET http://localhost:5000/todos

curl -X GET http://localhost:5000/todos/1

curl -X POST http://localhost:5000/todos -H "Content-Type: application/json" -d "{\"title\": \"Learn Hapi.js\"}"

curl -X PUT http://localhost:5000/todos/1 -H "Content-Type: application/json" -d "{\"title\": \"Learn Hapi.js in depth\", \"completed\": true}"

curl -X DELETE http://localhost:5000/todos/1