import React from 'react';

const header1 = "Check out — it’s free!";
const header2 = "Join our club so you'll NEVER miss new uploads!";

function Home(){
    return(
        <div class="container">
      <div class="col-md-6 mx-auto text-center">
         <div class="header-title">
            <img src="/images/obcustomz.png" alt="obcustomz logo"/>
            <h1 class="wv-heading--title">
               {header1}
            </h1>
            <h2 class="wv-heading--subtitle">
              {header2}
            </h2>
         </div>
      </div>
      <div class="row">
         <div class="col-md-4 mx-auto">
            <div class="myform form ">
            <form action="/" method="POST" name="login">
        <div class="form-group">
           <input type="text" name="firstname"  class="form-control my-input" id="name" placeholder="First Name"/>
        </div>
        <div class="form-group">
           <input type="text" name="lastname"  class="form-control my-input" id="name" placeholder="Last Name"/>
        </div>
        <div class="form-group">
           <input type="email" name="email"  class="form-control my-input" id="email" placeholder="Email"/>
        </div>
        <div class="text-center ">
           <button type="submit" class=" btn btn-block send-button tx-tfm">Sign Up!</button>
        </div>
        <div class="col-md-12 ">
           <div class="login-or">
              <hr class="hr-or"/>
           </div>
        </div>
     </form>
            </div>
         </div>
      </div>
   </div>

    );
}

export default Home;