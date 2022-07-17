import React, {useEffect, useState} from 'react'
import axios from 'axios'



export default function Users() {

  const [person, setPerson] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

    
  
  useEffect(() => {
        axios.get('https://api.github.com/users')
            .then((res) => {
                console.log(res.data);
                setPerson(res.data)
            })
            .catch((Error) => {
                console.log(Error)
        })
    }, [])
    
    


  return (
    <div>

      <div className='container'>
            <div className='row search'>
          <input type="text" name="search" placeholder='Enter name for searching ....' onChange={(e) => {
            setSearchTerm(e.target.value)
          }}/>
            </div>
      </div>
      <div className='wrapper'>
        {person.filter((employee) => {
          if (searchTerm == "") {
              return employee
          } else if (employee.login.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return employee
            }
          }).map((employee) => {
                const list = (
                    <>
                     <div className="card">
                      <div className="cardBody">
                        <img src={employee.avatar_url} alt="" />
                        <h4 className="cardTitle">ID:  <span>{employee.id}</span></h4>
                        <h4 className="cardText">Name:  <span>{employee.login}</span></h4>
                        <hr />
                        <p className="cardText">URL:  <span>{employee.html_url}</span></p>
                        <a className='btn btn-success' href={employee.html_url} style={{marginLeft: '20px'}}>Show More</a>
                      </div>
                     </div>
                    </>
                  );
                  return list;
          })
          } 
      </div>
      </div>
  )
}

