const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});


const registerUser = (request, response) => {
    const { name, email,password } = request.body
  
    pool.query('INSERT INTO public.User (Name, Email, Password, DateCreated) VALUES ($1, $2, $3, $4) RETURNING *', [name, email,password,"22 June 2023"], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  const userLogin = (request, response) => {
    const { email,password } = request.body
  
    pool.query('SELECT * FROM public.User WHERE email = $1 and password = $2', [email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }