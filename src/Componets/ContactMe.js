import { useEffect, useState } from 'react';


export default function Contactme () {

const [firstname,setFirstname] = useState("")
const [lastname,setLastname] = useState("")
const [email,setEmail] = useState("")
const [hiring,setHiring] = useState(false)

useEffect ( () => {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})
const hiddenElemnts = document.querySelectorAll('.hidden')
hiddenElemnts.forEach((el) => observer.observe(el))
})

function sumbit (e) {
  e.preventDefault()
  console.log(firstname)
  console.log(lastname)
  console.log(email)
  console.log(hiring)
  alert('Message Sent !')
  
}

const handleChangeF = e => {
const target = e.target;
const value = target.value
setFirstname(value)
}

const handleChangeL = e => {
const target = e.target;
const value = target.value
setLastname(value)
}

const handleChangeE = e => {
const target = e.target;
const value = target.value
setEmail(value)
}

const handleChangeH = e => {
const target = e.target;
const value = target.checked
setHiring(value)
}


return ( 
<div className='container hidden'>
<form onSubmit={sumbit}>

  <div>
  <input type="text" className='form-control my-1' placeholder='First Name' 
  onChange={handleChangeF} value={firstname}
  />
  </div>

  <div>
  <input type="text" className='form-control my-1' placeholder='Last Name' 
  onChange={handleChangeL} value={lastname}
  />
  </div>
  
  <div>
  <input type="text" className='form-control my-1' placeholder='Email' 
  onChange={handleChangeE} value={email}
  />
  </div>

  <div className='float-start'>
  <input type = "checkbox" className='form-check-input bg-secondary ' 
  onChange={handleChangeH} value={hiring}
  />
  <label className='form-check-label ms-1'>Looking to Hire?</label>
  </div>

  <div className='float-end'>
    <button type='submit' className='btn btn-secondary text-white '>Submit</button>
  </div>
</form>

</div>
)
}