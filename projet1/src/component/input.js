import React from 'react';




function bbb() {
    var email = document.getElementById("email");
    
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var number = document.getElementById("number");
    var name1 = document.getElementById("name");
    
    if (!email.checkValidity()) {
        alert(" email est incorrecte veuillez entrer un email correcte ");
    }
    if (!date.checkValidity()) {
        alert(" date est incorrecte veuillez entrer une date correcte ");
    }
    if (!time.checkValidity()) {
        alert("time est incorrecte veuillez entrer un horaire correcte ");
    }
    if (!number.checkValidity()) {
        alert("veuiller entrer le nombre des personnes");
    }
    if (!name1.checkValidity()) {
        alert("veuiller entrer votre nom");

    }
    if (email.checkValidity() && date.checkValidity() && number.checkValidity() && time.checkValidity() && name1.checkValidity()) {
        alert("merci , votre demande est enregistré");

        
    }
}

function Input(){


return (
   < div>

       <div className='block1'>
        <div className='name' >

                <input type="text " id="name" placeholder="name" size="10 "  required />
            </div>
            <div > 
                <input type="email" id="email" placeholder="--@gmail.com" size="10 " required />
            </div>
            <div>
                <input type="text" name="phone" id="phone" placeholder="phone" size="10 " required />
            </div>
            </div>
            <div className='block2'>
                <div>
                <input type="date" id="date"  placeholder="AAAA-MM-DD" min="2021-01-01" max="2022-12-31" required/>
            </div>
            <div>
                <input type="time" id="time" placeholder="appt" min="09:00" max="18:00" required />
            </div>
            <div>
                <input type="number" id="number" placeholde="number of people " size="10 " required />
            </div>
            </div>
            <div>
                <button  className="table" onClick={bbb}> book a table</button>
            </div>
        </div>
            
     

    
);
    
    }
export default Input;    
