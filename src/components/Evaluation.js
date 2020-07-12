import React, { Component } from 'react';
import Web3 from 'web3';
import SocialNetwork from '../abis/SocialNetwork.json';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class Evaluation extends Component {

	async componentWillMount(){
		await this.loadBlockchainData();
	}

	async loadBlockchainData(){
    		 const web3 = new Web3('http://127.0.0.1:8545/');        
       	 const netId = await web3.eth.net.getId();
         const networkData = SocialNetwork.networks[netId];
         console.log(netId);
		//if(networkData){
        //const socialNetwork =  web3.eth.Contract(SocialNetwork.abi,networkData.address);
          const accounts = await web3.eth.getAccounts();        
             
        
       	  this.setState({socialNetwork });
       	//   if(networkData){
          const socialNetwork = new web3.eth.Contract(SocialNetwork.abi,networkData.address
          // from: accounts[0],
          // gas: 3000000
         );
            console.log(socialNetwork);

           const postCount1 = await socialNetwork.methods.postCount1().call();
       	    this.setState({postCount1});
           console.log(postCount1);
       	  //  const cnt = web3.eth.getTransactionCount(account);
       	  //   this.setState({cnt});
        	 // console.log(cnt);
        	  	 const add = networkData.address;
          	this.setState({add});
        	console.log(add);
         // const postCount1 = await socialNetwork.methods.postCount1().call();
           //this.setState({postCount1});
           //console.log(postCount1)
            for (var i = 0; i < postCount1; i++) {       
            
            const post = await socialNetwork.methods.posts(i).call();
              
            this.setState({                                               
              posts: [...this.state.posts,post]
            })
            
            //console.log({posts: this.state.posts});

            const extra = await socialNetwork.methods.extras(i).call();
              
            this.setState({                                               
              extras: [...this.state.extras,extra]
            })
                        
          }
          //var cnt1,cnt2,cnt3,cnt4,cnt5;
          //let que;
          const store = {que0:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que1:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que2:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0}, 
                       que3:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que4:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que5:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que6:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que7:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que8:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0},
                       que9:{cnt1:0,cnt2:0,cnt3:0,cnt4:0,cnt5:0}};
                  console.log(store.que0);
                  this.setState({store});
          //console.log(store);
          //var str = new Object()[10];
          //str[1].cnt1 = 1;
          //store = {cnt1,cnt2,cnt3,cnt4,cnt5};
         // console.log(str[0].cnt1);
         //var str1=0;
          for(var i =0;i < postCount1;i++)
          {

            switch(this.state.posts[i].choice_1)
            {
              case 'very poor':
               store.que0.cnt1++;
         
                break;

              case 'below average':
                store.que0.cnt2++;  
                break;

              case 'average':
                store.que0.cnt3++;
                break;

              case 'good':
                store.que0.cnt4++;
                break;

              case 'excellent':
                store.que0.cnt5++;
                break;      
            }
            var str1 = store.que0.cnt1;
            console.log(str1)
            var str2 = store.que0.cnt2;
            console.log(str2)
            var str3 = store.que0.cnt3;
            console.log(str3)
            var str4 = store.que0.cnt4;
            console.log(str4)
            var str5 = store.que0.cnt5;
            console.log(str5)
            this.setState({str1});
            this.setState({str2});
            this.setState({str3});
            this.setState({str4});
            this.setState({str5});
            //var str1 = store.que0.cnt1;

            switch(this.state.posts[i].choice_2)
            {
              case 'very poor':
                store.que1.cnt1++;
                break;

              case 'below average':
                store.que1.cnt2++;  
                break;

              case 'average':
                store.que1.cnt3++;
                break;

              case 'good':
                store.que1.cnt4++;
                break;

              case 'excellent':
                store.que1.cnt5++;
                break;      
            }
            var str6 = store.que1.cnt1;
            var str7 = store.que1.cnt2;
            var str8 = store.que1.cnt3;
            var str9 = store.que1.cnt4;
            var str10 = store.que1.cnt5;
            this.setState({str6});
            this.setState({str7});
            this.setState({str8});
            this.setState({str9});
            this.setState({str10});
            
            switch(this.state.posts[i].choice_3)
            {
              case 'very poor':
                store.que2.cnt1++;
                break;

              case 'below average':
                store.que2.cnt2++;  
                break;

              case 'average':
                store.que2.cnt3++;
                break;

              case 'good':
                store.que2.cnt4++;
                break;

              case 'excellent':
                store.que2.cnt5++;
                break;      
            }
             var str11 = store.que2.cnt1;
            var str12 = store.que2.cnt2;
            var str13 = store.que2.cnt3;
            var str14 = store.que2.cnt4;
            var str15 = store.que2.cnt5;
            this.setState({str11});
            this.setState({str12});
            this.setState({str13});
            this.setState({str14});
            this.setState({str15});
            switch(this.state.posts[i].choice_4)
            {
              case 'very poor':
                store.que3.cnt1++;
                break;

              case 'below average':
                store.que3.cnt2++;  
                break;

              case 'average':
                store.que3.cnt3++;
                break;

              case 'good':
                store.que3.cnt4++;
                break;

              case 'excellent':
                store.que3.cnt5++;
                break;      
            }
            var str16 = store.que3.cnt1;
            var str17 = store.que3.cnt2;
            var str18 = store.que3.cnt3;
            var str19 = store.que3.cnt4;
            var str20 = store.que3.cnt5;
            this.setState({str16});
            this.setState({str17});
            this.setState({str18});
            this.setState({str19});
            this.setState({str20});
            switch(this.state.posts[i].choice_5)
            {
              case 'very poor':
                store.que4.cnt1++;
                break;

              case 'below average':
                store.que4.cnt2++;  
                break;

              case 'average':
                store.que4.cnt3++;
                break;

              case 'good':
                store.que4.cnt4++;
                break;

              case 'excellent':
                store.que4.cnt5++;
                break;      
            }
            var str21 = store.que4.cnt1;
            var str22 = store.que4.cnt2;
            var str23 = store.que4.cnt3;
            var str24 = store.que4.cnt4;
            var str25 = store.que4.cnt5;
            this.setState({str21});
            this.setState({str22});
            this.setState({str23});
            this.setState({str24});
            this.setState({str25});
            console.log(this.state.store)
             //console.log(this.state.posts[i].choice_1);            
          }
          for(var i =0;i < postCount1;i++)
          {

            switch(this.state.extras[i].choice_6)
            {
              case 'very poor':
                store.que5.cnt1++;
                break;

              case 'below average':
                store.que5.cnt2++;  
                break;

              case 'average':
                store.que5.cnt3++;
                break;

              case 'good':
                store.que5.cnt4++;
                break;

              case 'excellent':
                store.que5.cnt5++;
                break;      
            }
            var str26 = store.que5.cnt1;
            var str27 = store.que5.cnt2;
            var str28 = store.que5.cnt3;
            var str29 = store.que5.cnt4;
            var str30 = store.que5.cnt5;
            this.setState({str26});
            this.setState({str27});
            this.setState({str28});
            this.setState({str29});
            this.setState({str30});
           
            switch(this.state.extras[i].choice_7)
            {
              case 'very poor':
                store.que6.cnt1++;
                break;

              case 'below average':
                store.que6.cnt2++;  
                break;

              case 'average':
                store.que6.cnt3++;
                break;

              case 'good':
                store.que6.cnt4++;
                break;

              case 'excellent':
                store.que6.cnt5++;
                break;      
            }
            var str31 = store.que6.cnt1;
            var str32 = store.que6.cnt2;
            var str33 = store.que6.cnt3;
            var str34 = store.que6.cnt4;
            var str35 = store.que6.cnt5;
            this.setState({str31});
            this.setState({str32});
            this.setState({str33});
            this.setState({str34});
            this.setState({str35});
            switch(this.state.extras[i].choice_8)
            {
              case 'very poor':
                store.que7.cnt1++;
                break;

              case 'below average':
                store.que7.cnt2++;  
                break;

              case 'average':
                store.que7.cnt3++;
                break;

              case 'good':
                store.que7.cnt4++;
                break;

              case 'excellent':
                store.que7.cnt5++;
                break;      
            }
            var str36 = store.que7.cnt1;
            var str37 = store.que7.cnt2;
            var str38 = store.que7.cnt3;
            var str39 = store.que7.cnt4;
            var str40 = store.que7.cnt5;
            this.setState({str36});
            this.setState({str37});
            this.setState({str38});
            this.setState({str39});
            this.setState({str40});
            switch(this.state.extras[i].choice_9)
            {
              case 'very poor':
                store.que8.cnt1++;
                break;

              case 'below average':
                store.que8.cnt2++;  
                break;

              case 'average':
                store.que8.cnt3++;
                break;

              case 'good':
                store.que8.cnt4++;
                break;

              case 'excellent':
                store.que8.cnt5++;
                break;      
            }
            var str41 = store.que8.cnt1;
            var str42 = store.que8.cnt2;
            var str43 = store.que8.cnt3;
            var str44 = store.que8.cnt4;
            var str45 = store.que8.cnt5;
            this.setState({str41});
            this.setState({str42});
            this.setState({str43});
            this.setState({str44});
            this.setState({str45});
            switch(this.state.extras[i].choice_10)
            {
              case 'very poor':
                store.que9.cnt1++;
                break;

              case 'below average':
                store.que9.cnt2++;  
                break;

              case 'average':
                store.que9.cnt3++;
                break;

              case 'good':
                store.que9.cnt4++;
                break;

              case 'excellent':
                store.que9.cnt5++;
                break;      
            }
             var str46 = store.que9.cnt1;
            var str47 = store.que9.cnt2;
            var str48 = store.que9.cnt3;
            var str49 = store.que9.cnt4;
            var str50 = store.que9.cnt5;
            this.setState({str46});
            this.setState({str47});
            this.setState({str48});
            this.setState({str49});
            this.setState({str50});
            console.log(this.state.store)
           {
             //console.log(this.state.posts[i].choice_1);            
           }
          } 
             // console.log({posts: this.state.posts});          
             // console.log({extras: this.state.extras});
             // console.log(this.state.posts[1].content)
             console.log(this.state.store.que0.cnt1)
             //var str1 = this.state.store.que0.cnt1;
             //this.setState({str1}) 

	}

   constructor(props){
    super(props)
    this.state = {
      acc:'',
      socialNetwork: null,
      postCount1: 0,
      extras: [],            
      posts: [],
      loading: true      
    }
  //  this.createPost = this.createPost.bind(this);
  }

	render() {
		return(
  <div className="form-group mr-sm-2">     
			<div className="text-center mt-5">
      <h1>Staff/Teacher Administration </h1>
      
      <div >
       
          <Link to="/View">
          <li >Comments</li>
        </Link>
        <Link to="/mail">
          <li >Send mails</li>
          </Link>
        </div>  
      </div>
        <h3 className="p-2"><h3>A (Very Poor),B(Poor),C(Average),D(Good),E(Excellent)  </h3></h3>         

          <div className="p-2" >
          
		       <p><h4>Coverage of courses:-       </h4></p>
          
           <div><p>A:-{this.state.str1}</p></div>
           <div><p>B:-{this.state.str2}</p></div>
           <div><p>C:-{this.state.str3}</p></div>
           <div><p>D:-{this.state.str4}</p></div>
           <div><p>E:-{this.state.str5}</p></div>    						          		        
			</div>
      
      <div class="p-2 ">      
           <p><h4>Sustaining of interest:- </h4></p>           
           <div><p>A:-{this.state.str6}</p></div>
           <div><p>B:-{this.state.str7}</p></div>
           <div><p>C:-{this.state.str8}</p></div>
           <div><p>D:-{this.state.str9}</p></div>
           <div><p>E:-{this.state.str10}</p></div>                                     
      </div>

      <div className="p-2 ">      
           <p><h4>Organisation of lectures:- </h4></p>           
           <div><p>A:-{this.state.str11}</p></div>
           <div><p>B:-{this.state.str12}</p></div>
           <div><p>C:-{this.state.str13}</p></div>
           <div><p>D:-{this.state.str14}</p></div>
           <div><p>E:-{this.state.str15}</p></div>                                     
      </div>

      <div className="p-2">      
           <p><h4>Use of blackboard & other teaching aids:- </h4></p>           
           <div><p>A:-{this.state.str16}</p></div>
           <div><p>B:-{this.state.str17}</p></div>
           <div><p>C:-{this.state.str18}</p></div>
           <div><p>D:-{this.state.str19}</p></div>
           <div><p>E:-{this.state.str20}</p></div>                                     
      </div>

      <div className="p-2">      
           <p><h4>Objectivity in evaluation:- </h4></p>           
           <div><p>A:-{this.state.str21}</p></div>
           <div><p>B:-{this.state.str22}</p></div>
           <div><p>C:-{this.state.str23}</p></div>
           <div><p>D:-{this.state.str24}</p></div>
           <div><p>E:-{this.state.str25}</p></div>                                     
      </div>

      <div className="p-2">      
           <p><h4>Promt grading of tests or assignments:- </h4></p>           
           <div><p>A:-{this.state.str26}</p></div>
           <div><p>B:-{this.state.str27}</p></div>
           <div><p>C:-{this.state.str28}</p></div>
           <div><p>D:-{this.state.str29}</p></div>
           <div><p>E:-{this.state.str30}</p></div>                                     
      </div>
        <div className="p-2">      
           <p><h4>Encouraging academic interation:-  </h4></p>           
           <div><p>A:-{this.state.str31}</p></div>
           <div><p>B:-{this.state.str32}</p></div>
           <div><p>C:-{this.state.str33}</p></div>
           <div><p>D:-{this.state.str34}</p></div>
           <div><p>E:-{this.state.str35}</p></div>                                     
      </div>
      <div className="p-2">      
           <p><h4>Availability of book/course material:-</h4></p>           
           <div><p>A:-{this.state.str36}</p></div>
           <div><p>B:-{this.state.str37}</p></div>
           <div><p>C:-{this.state.str38}</p></div>
           <div><p>D:-{this.state.str39}</p></div>
           <div><p>E:-{this.state.str40}</p></div>                                     
      </div>
      <div className="p-2">      
           <p><h4>Provision of background knowledge:- </h4></p>           
           <div><p>A:-{this.state.str41}</p></div>
           <div><p>B:-{this.state.str42}</p></div>
           <div><p>C:-{this.state.str43}</p></div>
           <div><p>D:-{this.state.str44}</p></div>
           <div><p>E:-{this.state.str45}</p></div>                                     
      </div>
      <div >      
           <p><h4>Environment in department was conductive for learning:- </h4></p>           
           <div><p>A:-{this.state.str46}</p></div>
           <div><p>B:-{this.state.str47}</p></div>
           <div><p>C:-{this.state.str48}</p></div>
           <div><p>D:-{this.state.str49}</p></div>
           <div><p>E:-{this.state.str50}</p></div>                                     
      
      </div>
      </div>
    
			);
	}
}
export default Evaluation;