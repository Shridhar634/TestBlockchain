pragma solidity >=0.4.21 <0.6.0;

contract SocialNetwork {
    string public content;
    string public name;
    uint public postCount1 = 0;    
    
    string choice_1;
    string choice_2;    
    string choice_3;
    string choice_4;
    string choice_5;
    string choice_6;
    string choice_7;
    string choice_8;
    string choice_9;
    string choice_10;        
    bool public check = false;
    mapping(uint => Post) public posts;
    mapping(uint => Extra) public extras;
    mapping(address => bool) public students;    
    address teacher;
    
    
    
    struct Post {
        uint id;
        string content;                
        string  choice_1;
        string  choice_2;
        string  choice_3;
        string choice_4;
        string choice_5;                
        address teacher;        
        bool checks;    
    }

    struct Extra{
    uint id1;
    string choice_6;
    string choice_7;
    string choice_8;
    string choice_9;
    string choice_10;
    address teacher;
    }
                        
    event PostCreated(
        uint id,
        string  content,        
        string  choice_1,
        string  choice_2,
        string  choice_3,
        string choice_4,
        string choice_5,
        address sender,
        bool checks
    );

    event ExtraCreated(
    uint id1,
    string choice_6,
    string choice_7,
    string choice_8,
    string choice_9,
    string choice_10,
    address sender
    );
   
    constructor() public {
        name = "DBATU University Feedback Mnagement";
    }
                                
    function createPost(string memory _content,string memory choice_1,string memory choice_2,string memory choice_3,string memory choice_4,string memory choice_5,string memory choice_6,string memory choice_7,string memory choice_8,string memory choice_9,string memory choice_10 ) public {
        // Require valid content
        require(bytes(_content).length > 0);
        // Increment the post count
        postCount1++;
        // Create the post
        check = true;
        posts[postCount1] = Post(postCount1, _content,choice_1,choice_2,choice_3,choice_4,choice_5,msg.sender,check);
        // Trigger event
        emit PostCreated(postCount1,_content,choice_1,choice_2,choice_3,choice_4,choice_5,msg.sender,check);        
         
         extras[postCount1] = Extra(postCount1,choice_6,choice_7,choice_8,choice_9,choice_10,msg.sender);
         
         emit ExtraCreated(postCount1,choice_6,choice_7,choice_8,choice_9,choice_10,msg.sender);       

         students[msg.sender] = true;

    }             

}