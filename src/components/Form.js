import React, { Component } from 'react';

class Form extends Component{

  refreshPage=(event) => {
    alert("Submitted Successfully!!");
    window.location.reload(false);
  }

	render(){
		return(
			<div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
      
      			<p>&nbsp;</p>
            <p><h2>STUDENT FEEDBACK ON COURSE/TEACHER</h2></p>
            <p><h3>A (Very Poor),B(Poor),C(Average),D(Good),E(Excellent) under the appropriate columns.Avoid writing names anywhere, so that your identity is not revelead. </h3></p>         
            <form onSubmit={(event) => {
              event.preventDefault()
              var _content = this.postContent.value;
             //// var _choice_1 = document.getElementById('ip1').value;
            //  var _choice_2 = this.button22.value;
             // var _choice_3 = this.button33.value;
              var ch1;
              var ch2;
              var ch3;
              var ch4;
              var ch5;
              var ch6;
              var ch7;
              var ch8;
              var ch9;
              var ch10;
              if(document.getElementById('button11').checked){
                ch1 = document.getElementById('button11').value;
              }else if(document.getElementById('button12').checked){
                ch1 = document.getElementById('button12').value;
              }else if(document.getElementById('button13').checked){
                ch1 = document.getElementById('button13').value;
              }else if(document.getElementById('button14').checked){
                ch1 = document.getElementById('button14').value;
              }else if(document.getElementById('button15').checked){
                ch1 = document.getElementById('button15').value;
              }

              if(document.getElementById('button21').checked){
                ch2 = document.getElementById('button21').value;
              }else if(document.getElementById('button22').checked){
                ch2 = document.getElementById('button22').value;
              }else if(document.getElementById('button23').checked){
                ch2 = document.getElementById('button23').value;
              }else if(document.getElementById('button24').checked){
                ch2 = document.getElementById('button24').value;
              }else if(document.getElementById('button25').checked){
                ch2 = document.getElementById('button25').value;
              }

              if(document.getElementById('button31').checked){
                ch3 = document.getElementById('button31').value;
              }else if(document.getElementById('button32').checked){
                ch3 = document.getElementById('button32').value;
              }else if(document.getElementById('button33').checked){
                ch3 = document.getElementById('button33').value;
              }else if(document.getElementById('button34').checked){
                ch3 = document.getElementById('button34').value;
              }else if(document.getElementById('button35').checked){
                ch3 = document.getElementById('button35').value;
              }

              if(document.getElementById('button41').checked){
                ch4 = document.getElementById('button41').value;
              }else if(document.getElementById('button42').checked){
                ch4 = document.getElementById('button42').value;
              }else if(document.getElementById('button43').checked){
                ch4 = document.getElementById('button43').value;
              }else if(document.getElementById('button44').checked){
                ch4 = document.getElementById('button44').value;
              }else if(document.getElementById('button45').checked){
                ch4 = document.getElementById('button45').value;
              }

              if(document.getElementById('button51').checked){
                ch5 = document.getElementById('button51').value;
              }else if(document.getElementById('button52').checked){
                ch5 = document.getElementById('button52').value;
              }else if(document.getElementById('button53').checked){
                ch5 = document.getElementById('button53').value;
              }else if(document.getElementById('button54').checked){
                ch5 = document.getElementById('button54').value;
              }else if(document.getElementById('button55').checked){
                ch5 = document.getElementById('button55').value;
              }

              if(document.getElementById('button61').checked){
                ch6 = document.getElementById('button61').value;
              }else if(document.getElementById('button62').checked){
                ch6 = document.getElementById('button62').value;
              }else if(document.getElementById('button63').checked){
                ch6 = document.getElementById('button63').value;
              }else if(document.getElementById('button64').checked){
                ch6 = document.getElementById('button64').value;
              }else if(document.getElementById('button65').checked){
                ch6 = document.getElementById('button65').value;
              }
              
              if(document.getElementById('button71').checked){
                ch7 = document.getElementById('button71').value;
              }else if(document.getElementById('button72').checked){
                ch7 = document.getElementById('button72').value;
              }else if(document.getElementById('button73').checked){
                ch7 = document.getElementById('button73').value;
              }else if(document.getElementById('button74').checked){
                ch7 = document.getElementById('button74').value;
              }else if(document.getElementById('button75').checked){
                ch7 = document.getElementById('button75').value;
              }

              if(document.getElementById('button81').checked){
                ch8 = document.getElementById('button81').value;
              }else if(document.getElementById('button82').checked){
                ch8 = document.getElementById('button82').value;
              }else if(document.getElementById('button83').checked){
                ch8 = document.getElementById('button83').value;
              }else if(document.getElementById('button84').checked){
                ch8 = document.getElementById('button84').value;
              }else if(document.getElementById('button85').checked){
                ch8 = document.getElementById('button85').value;
              }

              if(document.getElementById('button91').checked){
                ch9 = document.getElementById('button91').value;
              }else if(document.getElementById('button92').checked){
                ch9 = document.getElementById('button92').value;
              }else if(document.getElementById('button93').checked){
                ch9 = document.getElementById('button93').value;
              }else if(document.getElementById('button94').checked){
                ch9 = document.getElementById('button94').value;
              }else if(document.getElementById('button95').checked){
                ch9 = document.getElementById('button95').value;
              }

              if(document.getElementById('button101').checked){
                ch10 = document.getElementById('button101').value;
              }else if(document.getElementById('button102').checked){
                ch10 = document.getElementById('button102').value;
              }else if(document.getElementById('button103').checked){
                ch10 = document.getElementById('button103').value;
              }else if(document.getElementById('button104').checked){
                ch10 = document.getElementById('button104').value;
              }else if(document.getElementById('button105').checked){
                ch10 = document.getElementById('button105').value;
              }
              console.log(ch1);
              console.log(ch3);
              console.log(ch2);
              this.props.createPost(_content,ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8,ch9,ch10);
            }
            }>
              <div className="form-group mr-sm-2">
                
                
                <div className="form-group mr-sm-2"  id="ip1">
                 <p>Coverage of courses:-       </p>          
                 <input type="radio"  id="button11" name="radio" value='very ' /> <label>A</label>&nbsp;
                 <input type="radio"  id="button12" name="radio" value='below average' /> <label>B</label>&nbsp;
                 <input type="radio"  id="button13" name="radio" value='average' /> <label>C</label>&nbsp;
                 <input type="radio"  id="button14" name="radio" value='good' /> <label>D</label>&nbsp;
                 <input type="radio"  id="button15" name="radio" value='excellent' /> <label>E</label>&nbsp;
                                
                </div>
                <div>
                <p>Sustaining of interest:- </p>
                 <input type="radio"  id="button21" name="radio1" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button22" name="radio1" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button23" name="radio1" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button24" name="radio1" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button25" name="radio1" value='excellent' /><label> E</label>&nbsp;
                
                </div>  
                <div>
                <p>Organisation of lectures:- </p>
                 <input type="radio"  id="button31" name="radio12" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button32" name="radio12" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button33" name="radio12" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button34" name="radio12" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button35" name="radio12" value='excellent' /><label> E</label>&nbsp;
                
                </div>
                <div>
                <p>Use of blackboard & other teaching aids:- </p>
                 <input type="radio"  id="button41" name="radio13" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button42" name="radio13" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button43" name="radio13" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button44" name="radio13" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button45" name="radio13" value='excellent' /><label> E</label>&nbsp;
                
                </div>
                <div>
                <p>Objectivity in evaluation:- </p>
                 <input type="radio"  id="button51" name="radio14" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button52" name="radio14" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button53" name="radio14" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button54" name="radio14" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button55" name="radio14" value='excellent' /><label> E</label>&nbsp;
                
                </div>

                <div>
                <p>Promt grading of tests/assignments:- </p>
                 <input type="radio"  id="button61" name="radio15" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button62" name="radio15" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button63" name="radio15" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button64" name="radio15" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button65" name="radio15" value='excellent' /><label> E</label>&nbsp;
                
                </div>

                <div>
                <p>Encouraging academic interation:- </p>
                 <input type="radio"  id="button71" name="radio16" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button72" name="radio16" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button73" name="radio16" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button74" name="radio16" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button75" name="radio16" value='excellent' /><label> E</label>&nbsp;
                
                </div>

                <div>
                <p>Availability of book/course material:- </p>
                 <input type="radio"  id="button81" name="radio17" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button82" name="radio17" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button83" name="radio17" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button84" name="radio17" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button85" name="radio17" value='excellent' /><label> E</label>&nbsp;
                
                </div>

                <div>
                <p>Provision of background knowledge:- </p>
                 <input type="radio"  id="button91" name="radio18" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button92" name="radio18" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button93" name="radio18" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button94" name="radio18" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button95" name="radio18" value='excellent' /><label> E</label>&nbsp;
                
                </div>
                <div>
                <p>Environment in department was conductive for learning:- </p>
                 <input type="radio"  id="button101" name="radio19" value='very poor' /><label> A</label>&nbsp;
                 <input type="radio"  id="button102" name="radio19" value='below average' /><label> B</label>&nbsp;
                 <input type="radio"  id="button103" name="radio19" value='average' /><label> C</label>&nbsp;
                 <input type="radio"  id="button104" name="radio19" value='good' /><label> D</label>&nbsp;
                 <input type="radio"  id="button105" name="radio19" value='excellent' /><label> E</label>&nbsp;
                
                </div>
                <br>
                </br>
                <input 
                  id="postContent"
                  type="text"  
                  ref={(input)=>{ this.postContent = input }}
                     
                  className="form-control"
                  placeholder="Any Suggetions"
                  required >
                </input>
              </div>
             
              <button  type="submit" onClick={this.refreshPage} className="btn btn-primary btn-block">Submit</button>
              
            </form>  
            

            <p>&nbsp;</p>

            </div>
          </main>
        </div>
      </div>
			)
	}
}

export default Form;