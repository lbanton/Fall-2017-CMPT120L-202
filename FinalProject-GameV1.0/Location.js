            /*location.js*/
		  
  // Global Variables 
   
	 var score = 0;
     var currentLoc = 0;
	 var MonsterI = 0;
	 var MonsterII = 0;
     var Win = true;	 
	  
  // locations matrix
	 
	 var nav = [// N  S  E  W
	 
         /*0*/	  [1, 2, 8, 3 ],
		 /*1*/    [5, 0, 7, -1],
		 /*2*/    [0, -1, 9, 10],
		 /*3*/    [1, 10, 8, -1],
		 /*4*/    [7, 9, -1, 8],
		 /*5*/    [-1, 1, 7, 6], 
		 /*6*/    [-1, 1, 5, -1], 
		 /*7*/    [-1, 4, -1,1], 
		 /*8*/    [7, 9, 4, 0], 
		 /*9*/    [4, -1, -1, 2], 
		 /*10*/   [3, -1, 2, -1],
                ];
  // Add Global array for look() and Inventory("Treasure")
   
      var locations =[];
	  var Treasure =[];
	  var monster =[];
	  
	  var TreasureChest = new Item (0,"Treasure chest,","You retrieved a Treasure Chest, and it's empty but don’t worry there are lots of hidden treasure around these islands, but beware of sea monsters lurking in the Ocean. legend has it that they like to sink ships like yours be careful. Please click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
	  var CubanCigar = new Item (1,"Cuban cigar,","You just retrieved a Cuban cigar!!!");
	  var Rarepearl = new Item (3,"Rare pearl,","Nice! You just retrieved a Rare pearl!!!");
	  var MagicSkullkey = new Item (2,"Magic skull key,","Awesome! You just retrieved the Magic Skull key!!");
	  var GoldenCompass = new Item(4,"Golden Compass,","You just retrieved the Golden Compass!!");
	  var TheSpearofPoseidon = new Item(5,"The Spear of Poseidon,","You retrieved the spare of Poseidon; you can probably use this as a weapon to defeat any sea monsters."); 
	   
  // Sea Monsters.
  
      var GiantSquid = new SeaMonster(0,"Giant Squid","Oh no!!! your ship is being attack by the legendary Giant Squid use your weapon to defend your ship and watch out for those hugh tentacles.");
	  var GiantShark = new SeaMonster(1,"Giant Shark","Oh no!!! your ship is being attack by a Giant Shark use your weapon to defend your ship and don't become shark food.");
	  
  // monster array
  
	monster[0]= GiantSquid;
    monster[1]= GiantShark;	
	
	
  // Locations in an array.
  
  	  var Jamaica = new Location(0,"Jamaica","You’re on a ship in Montego Bay, off the Coast of Jamaica ready to venture through Paradise hoping to find some treasure. Wow! It looks like you found a Treasure Chest. Click on the TAKE ITEM button to retrieve item.",TreasureChest,"CTHGamemapLoc0.gif",null);
	  var Cuba = new Location(1,"Cuba","Welcome to Cuba don't forget to check out Havana for some Cuban cigar. Ohh! Look you just found a cigar. Don't smoke the whole thing at once.",CubanCigar,"CTHGamemapLoc1.gif",null); 
	  var Panama = new Location(2,"Panama","Welcome to Panama City please feel free to search the city, you may be lucky to find your fortune.",null,"CTHGamemapLoc2.gif",null);
	  var Cayman = new Location(3,"Cayman","Welcome to the Cayman Islands, don't forget to check-in by our Treasure Island Resort.",null,"CTHGamemapLoc3.gif",null);
	  var DomincainRepublic = new Location(4,"Domincain Republic","Welcome to Dominican Republic, there is lots of buried treasure off the shore of Punta Cana. Don't forget to bring your shovel and watch out for the looters!.",null,"CTHGamemapLoc4.gif",null);
	  var Bahamas = new Location(5,"Bahamas","Welcome to the Bahamas, I hope you get to check out the blue Lagoon Island and say hello to the dolphins.",null,"CTHGamemapLoc5.gif");
	  var Miami = new Location(6,"Miami","Welcome to Miami, please visit the ship yard in south Miami if you would like to upgrade your ship! Oh! It looks like you found something. Please click on the TAKE ITEM button to retrieve item.",MagicSkullkey,"CTHGamemapLoc6.gif",GiantShark);
	  var TurksandCaicos = new Location(7,"Turks and Caicos","Welcome to Turks and Caicos, don't forget to check out  the Grand Turk lighthouse there are tails of buried treasure by the OLD GODS around this area.",TheSpearofPoseidon,"CTHGamemapLoc7.gif",null);
	  var Haiti = new Location(8,"Haiti","Welcome to Haiti. You may or may not find a hidden treasure here",null,"CTHGamemapLoc8.gif",null);
	  var Aruba = new Location(9,"Aruba","Welcome to Aruba. Sweet! It looks like you just found a pearl. Click on the TAKE ITEM button to retrieve item.",Rarepearl,"CTHGamemapLoc9.gif",GiantSquid);
	  var CostaRica = new Location(10,"Costa Rica","Welcome to Costa Rica! Get ready to navigate the seven seas. Please Click on the TAKE ITEM button to retrieve item.",GoldenCompass,"CTHGamemapLoc10.gif",null);
	  
 
    locations[0]= Jamaica;
	locations[1]= Cuba;
	locations[2]= Panama;
	locations[3]= Cayman;
	locations[4]= DomincainRepublic;
	locations[5]= Bahamas;
	locations[6]= Miami;
	locations[7]= TurksandCaicos;
	locations[8]= Haiti; 
	locations[9]= Aruba;      
	locations[10]= CostaRica;
	 
  // Initialization
  
    function init() {
      var desc = locations[currentLoc].desc;	
     	  updatedisplayMessage(desc);
	}
	
    function look(){
		
  // Debug Aid
  
		console.log(currentLoc);
		console.log(locations);
		console.log(score);
		console.log(btnitem_click);
		console.log(Treasure);
		console.log(monster);
		console.log(locations[currentLoc]);
		var desc = locations[currentLoc].desc;	
		updatedisplayMessage(desc);
		scoremsg(score);
	}
	
  // prototype for locations, items, and SeaMonsters 
 
	function Location(id, name, desc, item, maps, monster) {
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.item = item;
		this.maps = maps; 
		this.monster = monster;
		this.toString = function(){
			 return this.id + "" + this.name + "" + this.desc + "" + this.item + "" + this.maps + "" + this.monster;
        };
	}					
	function Item(id, name, desc){
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.toString = function(){
             return this.id + "" + this.name + "" + this.desc;
        };
	}
    function SeaMonster(id, name, desc){
		this.name = name;
		this.desc = desc;
		this.toString = function() {
			return this.id + "" + this.name + "" + this.desc;
        };
	 }
	 
  // Counter function

	 function hiddenMonsters(){ 
		if(currentLoc == 6){
			MonsterI +=1;
			console.log(MonsterI);
			attack();
		   }else if(currentLoc == 9){
			MonsterII +=1;
			console.log(MonsterII);
			attack();
	    }
	 }
	 
  // Trigger attack function
  
	 function attack(){   
		if(MonsterI == 3 && locations[currentLoc].monster !=null){
	       updatedisplayMessage(monster[1].desc);
		   locations[currentLoc].monster[1] = null;
		   }else if(MonsterII == 2 && locations[currentLoc].monster !=null){
		   updatedisplayMessage(monster[0].desc);
		   locations[currentLoc].monster = null;
		   console.log(attack());
		}
	 }
	 
  // This function works with the navigation Matrix and add score by 5 points. 
     
	 function nextLoc(dir) {
		var newLoc = nav[currentLoc][dir];
        if (newLoc >= 0) {
            currentLoc = newLoc;
			score +=5;
			button();
            }else{
            updatedisplayMessage("You cannot go that way.");
            }            
     }
	 
 //	 Navigation button north, south, east, west.
 
	 function btnNorth_click(){
	          nextLoc(0);
			  look();
			  hiddenMonsters();		  
     }
	 function btnSouth_click(){
              nextLoc(1);
			  look();
			  hiddenMonsters();
			  	  
     }
	 function btnEast_click(){
		      nextLoc(2);
			  look();
			  hiddenMonsters();		  
	 }
	 function btnWest_click(){
		      nextLoc(3);
			  look();
			  hiddenMonsters();  
     }
	  // This invertory function is a counter for inventory 
	function inventory(){
		document.getElementById("inventory").innerHTML ="Inventory list:\n"
		 var i;
		 for( i = 0; i<Treasure.length; i++) {
			 document.getElementById("inventory").innerHTML += Treasure[i].name+"\n";
			 updatedisplayMessage(Treasure[i].desc+"\n");
		} 
	}
	  // This btnitem_click() function add treatures to inventory when found
	
    function btnitem_click(){
		if(locations[currentLoc].item !=null ){
			button();
			Treasure.push(locations[currentLoc].item);
			inventory();
			locations[currentLoc].item = null;
			}else if(locations[currentLoc].item == null){
			updatedisplayMessage("Sorry there is no item to take.");
	    }
    }
	
	// this function allow user to input txt command to navigate
	
	function btnGo_click(){
		var user_input = document.getElementById("txtCommand").value;
		         if (user_input == "n"|| user_input == "N" || user_input == "north") {
				 btnNorth_click();
		  } else if (user_input == "s" || user_input == "S") {
			     btnSouth_click();
		       } else if (user_input == "e"|| user_input == "e") {
			             btnEast_click();
		               } else if (user_input == "w" || user_input == "W" ) {
				                  btnWest_click();
								} else if(user_input == "i" || user_input =="I"){
								          alert(locations[currentLoc].item+"");
		                              } else {
			                      updatedisplayMessage("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
		                        }
    }
	
	//Weapon Button function and 
	
	function btnWeapon_click(){
		if(MonsterII == 2 && locations[currentLoc].monster == null){
			alert("Congratulations you defeat the lengendary Sea Monster!! you won the game. Thank you for playing.");
			score +=500;
		}else if(MonsterI == 3 && locations[currentLoc].monster == null){
			alert("you defeat the shark");
			score +=500;
				}else if(locations[currentLoc] !=9 || locations[currentLoc] !=6 ){	
						alert("Sorry you cannot use weapon bud!!")		
		}
	}
	
    // Enable button when weapon is picked up.
	
	function button(){
		if(currentLoc == 7 && locations[currentLoc].item != null){
			document.getElementById("btnWeapon").disabled = false;
		}
	}
	
	// Maps Animation
	
	function updatedisplayMessage(msg) {
        var target = document.getElementById("message");
	    var maps = document.getElementById("maps");
			 maps.src = locations[currentLoc].maps;
			 console.log(maps);
             target.value = msg+"\n\n"+ target.value;
    } 	
	function scoremsg(score){
		document.getElementById("Score").innerHTML = "Score:"+score;
	} 	
	
  //   Help button
  
    function btnhlp_click() {
             alert("Please Click on the navigation button below (North, South, East, West) or type in the following letters (N,S,E,W,n,s,e,w,) to navigate your ship!!!");
    }		   