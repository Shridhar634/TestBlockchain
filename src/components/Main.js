import React, { Component } from 'react';
import Identicon from 'identicon.js';
import SignUp_2 from './SignUp_2';
import Navbar from './Navbar';
class Main extends Component {

  render() {
    return (
      <div>
      <Navbar account={this.props.account} />
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">                      
              { this.props.posts.map((post,key) => 
                {
                return(
                  <div className="card mb-4" key={key}>      
                  <div className="card-header">
                  <img
                    className='mr-2'
                    width='30'
                    height='30'
                    src={`data:image/png;base64,${new Identicon(post.teacher,30).toString()}`}

                  />                 
                    <small className="text-muted">{post.teacher}</small>                    
                  </div>    
                  <ul id="postList" className="list-group list-group-flush">
                    <li className="list-group-item">
                       <p> {post.content}</p>
                    </li>
                    
                  </ul>           
                </div>
                );
              })};
            </div>
          
          </main>
        </div>
      </div>
      </div>
    );
  }
}

export default Main;