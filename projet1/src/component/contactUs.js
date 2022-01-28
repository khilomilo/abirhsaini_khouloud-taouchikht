import React , { useState } from 'react';
import{ init } from '@emailjs/browser';
init("user_VMZRY92tzhFdreGcj3veP");


function ContactUs(props){


    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");;
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
   
function Bbb(e) {
    var email1 = document.getElementById("email");
    var lname1 = document.getElementById("lname");
    var comment1 = document.getElementById("comment");
    
    var fname1 = document.getElementById("name");
    
    if (!email1.checkValidity()) {
        alert("  veuillez entrer un email  ");
    }
    if (!fname1.checkValidity()) {
        alert(" veuillez entrer votre prenom ");
    }
    if (!lname1.checkValidity()) {
        alert("veuillez entrer votre nom ");
    }
    if (!comment1.checkValidity()) {
        alert("veuiller entrer un commentaire");
    }
    
    if (email1.checkValidity() && fname1.checkValidity() && lname1.checkValidity() && comment1.checkValidity() && fname1.checkValidity()) {
        alert("merci , votre demande est enregistré");
        e.preventDefault();

        sendFeedback("template_ysxyycn", {
          fname,
          lname,
          comment,
          email,
          
        });
      };

        
    }


const sendFeedback = (templateId, variables) => {

    window.emailjs
        .send("service_hcsupv9", templateId, variables)
          .then((res) => {
            console.log('success !');
            setFname("");
            setLname("");
           
            setEmail("");
            setComment("");
            

          })
        };

    

return (
   < div>
    <div className="container contact">
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div className="col-md-9">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" name="fname" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" name="lname" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" name="email" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows={5} onChange={(e) => setComment(e.target.value)} id="comment" defaultValue={""} />
                </div>
              </div>
              <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default"  onClick={Bbb}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
        
            
     
);
    
    }
export default ContactUs;