
var array1 = ["Program", "Dictionary", "Library", "Help", "Assistance", "Service", "File", "Organization", "Help", "Charity", 
              "Rental", "Sales", "Delivery", "Issue", "News", "Map", "Statistics", "Book", "Information", "Calendar", "Speech", 
              "Maintenance", "Relationship", "Health", "Food", "Clothes", "Home", "Order"];

var array2 = ["Speak", "Eat", "Live", "Have", "Put", "Take", "Give", "Go", "Say", "Make", "Be able to", "Need", "Want", "Need",
              "Open", "Grab", "Walk", "Drink", "Look for", "Close", "Start", "Buy", "Drive", "Order", "Sleep", "Find", "Understand",
              "Write", "Listen", "Think", "Read", "Lose", "Hear", "Play", "Go out", "Jump", "See", "Work", "Bring", "Touch", "Sit down",
              "Feel", "Pay", "Run"];

var array3 = ["Airport", "Bakery", "Bank",  "Bar", "Bookstore", "Bus station", "Butcher's", "Café", "Church", "Court", "Department store", "Cinema", 
              "Service station", "Gym", "Hairdresser's" ,"Hospital", "Hotel", "Gallery", "Grocery store", "Jail", "Laundromat", "Library",
              "Mall", "Museum" ,"Motel" ,"Parking lot", "Pharmacy" ,"Police station", "Post office", "Pub", "Park", "Restaurant" ,"School", "Train station", 
              "Supermarket", "Zoo"];

var array4 = ["Friends", "Family", "Kids", "Teenager", "Adult", "Old people", "Immigrants", "Boys", "Girls", "Man", "Woman", "Homeless", "Volunteering",
              "Sibling", "Father", "Mother", "Broder", "Workers", "Students", "Babies", "Handicapped", "Blind", "Deaf", "Atheletes"];
              
               


$(document).ready(function(){
    
      var cantidad1 = 100 / array1.length;
    
   
   
    
    
    $("#btn-gen").on("click", function(){
         var rand1 = array1[Math.floor(Math.random() * array1.length)];
         var rand2 = array2[Math.floor(Math.random() * array2.length)];
         var rand3 = array3[Math.floor(Math.random() * array3.length)];
         var rand4 = array4[Math.floor(Math.random() * array4.length)];
        
          
                $("#out-1").val(rand1);
                $("#out-2").val(rand2);
                $("#out-3").val(rand3);
                $("#out-4").val(rand4);
                
            
        
            
                $("#out-1-3").val(rand1);
                $("#out-2-3").val(rand2);
                $("#out-3-3").val(rand3);
                $("#out-4-4").val(rand4);
        
    });
    
    $("#btn-gen-1").on("click", function(){
        
        
                 var rand1 = array1[Math.floor(Math.random() * array1.length)];
                $("#out-1").val(rand1);

        
        
        
        
        
    });
   
   
    $("#btn-gen-2").on("click", function(){
        
        
                 var rand2 = array2[Math.floor(Math.random() * array2.length)];

        
                        $("#out-2").val(rand2);

        
        
        
    });
   


//----------------------------------------- 3RD PAGE-----------------------------
 $("#btn-gen-1-3").on("click", function(){
        
        
                 var rand1 = array1[Math.floor(Math.random() * array1.length)];

                        $("#out-1").val(rand1);

    });
    
    $("#btn-gen-2-3").on("click", function(){
        
        -3-3
                 var rand2 = array2[Math.floor(Math.random() * array2.length)];

                        $("#out-2").val(rand2);

    });
    
    $("#btn-gen-3-3").on("click", function(){
        
        -3-3
                 var rand3 = array3[Math.floor(Math.random() * array3.length)];

                        $("#out-3").val(rand3);

    });
   
   //------------------------------------END 3RD PAGE-----------------------------
   
//--------------------------------3-------- 4TH PAGE-----------------------------
 $("#btn-gen-1-4").on("click", function(){
        
        
                 var rand1 = array1[Math.floor(Math.random() * array1.length)];

                        $("#out-1").val(rand1);

    });
    
    $("#btn-gen-2-4").on("click", function(){
        
        
                 var rand2 = array2[Math.floor(Math.random() * array2.length)];

                        $("#out-2").val(rand2);

    });
    
    $("#btn-gen-3-4").on("click", function(){
        
        
                 var rand3 = array3[Math.floor(Math.random() * array3.length)];

                        $("#out-3").val(rand3);

    });
    
    $("#btn-gen-4-4").on("click", function(){
        
        
                 var rand4 = array4[Math.floor(Math.random() * array4.length)];

                        $("#out-4").val(rand3);

    });
   
   //------------------------------------END 4TH PAGE-----------------------------
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});