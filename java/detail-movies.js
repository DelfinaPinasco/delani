let query1 = location.search
let query2 = new URLSearchParams(query1)
console.log(query2)
let id = query2.get("movie_id")