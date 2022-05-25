import React, { useEffect, useState } from "react";
import "./Interface.css";
import $ from "jquery";
import { Link } from "react-router-dom";



// Here, we display our Navbar
export default function Interface() {
  var currentUrl = window.location.href;
    
  const ObjectId = currentUrl.split('/')[4];


  //Every time open the pack, add the count+1.
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState(0);

  //Player1 Props
  const [name1, setName1] = useState([]);
  const [position1, setPosition1] = useState([]);
  const [cardNum1, setCardNum1] = useState([]);
  const [type1, setType1] = useState([]);
  const [numbercircle1, setNumbercircle1] = useState([]);
  const [imageUrl1, setImageUrl1] = useState([]);
  const [rarityUrl1, setRarityUrl1] = useState([]);

  //Player2 Props
  const [name2, setName2] = useState([]);
  const [position2, setPosition2] = useState([]);
  const [cardNum2, setCardNum2] = useState([]);
  const [type2, setType2] = useState([]);
  const [numbercircle2, setNumbercircle2] = useState([]);
  const [imageUrl2, setImageUrl2] = useState([]);
  const [rarityUrl2, setRarityUrl2] = useState([]);

  //Player3 Props
  const [name3, setName3] = useState([]);
  const [position3, setPosition3] = useState([]);
  const [cardNum3, setCardNum3] = useState([]);
  const [type3, setType3] = useState([]);
  const [numbercircle3, setNumbercircle3] = useState([]);
  const [imageUrl3, setImageUrl3] = useState([]);
  const [rarityUrl3, setRarityUrl3] = useState([]);

  //Player4 Props
  const [name4, setName4] = useState([]);
  const [position4, setPosition4] = useState([]);
  const [cardNum4, setCardNum4] = useState([]);
  const [type4, setType4] = useState([]);
  const [numbercircle4, setNumbercircle4] = useState([]);
  const [imageUrl4, setImageUrl4] = useState([]);
  const [rarityUrl4, setRarityUrl4] = useState([]);

  //Modifier Props
  const [name5, setName5] = useState([]);
  const [detail5, setDetail5] = useState([]);
  const [cardNum5, setCardNum5] = useState([]);
  const [type5, setType5] = useState([]);
  const [imageUrl5, setImageUrl5] = useState([]);
  const [rarityUrl5, setRarityUrl5] = useState([]);
  

  // This method fetches the players from the database.
  useEffect(() => {
    async function getRecords() {
    try {
      var currentUrl = `http://localhost:5000/users/` + ObjectId;
      var response = await Promise.all([

        fetch('http://localhost:5000/players').then((response) => response.json()),// parse each response as json
        fetch('http://localhost:5000/modifiers').then((response) => response.json()),
        fetch(currentUrl).then((response) => response.json()),
      ]);

    } catch (error) {
      console.log(error);
    }

 
    const players = response[0];
    const modifiers = response[1];
    const users = response[2];
    // the response returns a promise with JSON object.

    setUserName(users.name);

    // Use filter to select object by CardName
      // console.log(JSON.stringify(players,null,2));
    //  console.log(players[1].name);

    //Get Player 1    
     var index1 = getRandomRange(0,179);
     setName1(players[index1].name);
     setPosition1(players[index1].position);
     setCardNum1(players[index1].cardNumber);
     setType1(players[index1].rarity);
     setNumbercircle1(players[index1].score);
     setImageUrl1(players[index1].imageUrl);
     setRarityUrl1(players[index1].rarityUrl);
    //  var aindex1 = count*4-5;
    //  index1 = aindex1;

    //Get Player 2
     var index2 = getRandomRange(0,179);
     while(index2===index1){
       index2 = getRandomRange(0,179); 
     } //avoid duplicate player
     setName2(players[index2].name);
     setPosition2(players[index2].position);
     setCardNum2(players[index2].cardNumber);
     setType2(players[index2].rarity);
     setNumbercircle2(players[index2].score);
     setImageUrl2(players[index2].imageUrl);
     setRarityUrl2(players[index2].rarityUrl);
    //  var aindex2 = count*4-4;
    //  index2 = aindex2;

    //Get Player 3
     var index3 = getRandomRange(0,179);
     while(index3===index1 || index3===index2){
      index3 = getRandomRange(0,179); 
    } //avoid duplicate player
     setName3(players[index3].name);
     setPosition3(players[index3].position);
     setCardNum3(players[index3].cardNumber);
     setType3(players[index3].rarity);
     setNumbercircle3(players[index3].score);
     setImageUrl3(players[index3].imageUrl);
     setRarityUrl3(players[index3].rarityUrl);
    //  var aindex3 = count*4-3;
    //  index3 = aindex3;

    //Get Player 4
     var index4 = getRandomRange(0,179);
     while(index4===index1 || index4===index2 || index4===index3){
      index4 = getRandomRange(0,179);
    } //avoid duplicate player
     setName4(players[index4].name);
     setPosition4(players[index4].position);
     setCardNum4(players[index4].cardNumber);
     setType4(players[index4].rarity);
     setNumbercircle4(players[index4].score);
     setImageUrl4(players[index4].imageUrl);
     setRarityUrl4(players[index4].rarityUrl);
    //  var aindex4 = count*4-2;
    //  index4 = aindex4;
    //  alert(aindex2+'-'+(aindex4+1));

    //Get Player 5
    var index5 = getRandomRange(0,13);
     setName5(modifiers[index5].name);
     setDetail5(modifiers[index5].details);
     setCardNum5(modifiers[index5].modNumber);
     setType5(modifiers[index5].rarity);
     setImageUrl5(modifiers[index5].imageUrl);
     setRarityUrl5(modifiers[index5].rarityUrl);
    // var aindex5 = count-1;
    // var  index5 = aindex5;


    // random number in range
    function getRandomRange(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      // maximum and minimum are inclusive
      return Math.floor(Math.random() * (max - min + 1) + min);
    } 
   }
 
   getRecords();
 
   return;
 },[count]);   //every time count changes, the UseEffect will run.




 async function onSubmit(e) {
    e.preventDefault();

    var carddata = {
      CardNum1: $('input[name=CardNum1]').val(),
      CardNum2: $('input[name=CardNum2]').val(),
      CardNum3: $('input[name=CardNum3]').val(),
      CardNum4: $('input[name=CardNum4]').val(),
      CardNum5: $('input[name=CardNum5]').val(),
    };

    console.log(carddata);

    alert("Card " + carddata.CardNum1 + " "
    + carddata.CardNum2 + " "
    + carddata.CardNum3 + " "
    + carddata.CardNum4 + " "
    + carddata.CardNum5 + " " 
    + " Collected");

    const pushUrl = "http://localhost:5000/users/basket/push/" + ObjectId;
    // console.log(pushUrl);

    await fetch(pushUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carddata),
    })
    .catch(error => {
      window.alert(error);
      return;
  });
}

  //
  // Pack opening  
  //   
  const sayHello = () => {

    // alert("Welcome to play Birch!"); 

    setCount(count + 1); //every time click the button, count + 1
 
    // reset everything for start of new pack opening!
    var $card01front = $(".card01 .front");
    var $card01back = $(".card01 .back");
    var $card02front = $(".card02 .front");
    var $card02back = $(".card02 .back");
    var $card03front = $(".card03 .front");
    var $card03back = $(".card03 .back");
    var $card04front = $(".card04 .front");
    var $card04back = $(".card04 .back");
    var $card05front = $(".card05 .front");
    var $card05back = $(".card05 .back");
          
    // clear existing Cards
    $card01front.fadeOut("slow");
    $card02front.fadeOut("slow");
    $card03front.fadeOut("slow");
    $card04front.fadeOut("slow");
    $card05front.fadeOut("slow");

    // set back the cover of Back
    $card01front.removeClass("grow");
    $card02front.removeClass("grow");
    $card03front.removeClass("grow");
    $card04front.removeClass("grow");
    $card05front.removeClass("grow");

    // unbind event handlers from backs
    $card01back.unbind();
    $card02back.unbind();
    $card03back.unbind();
    $card04back.unbind();
    $card05back.unbind();

    // Card 01
    $card01back.delay(500).queue(function(nxt) {
      $(this).show();
      $(this).click(function() {
        $(this).hide();
        $card01front.animate({
          width: 'show'
        }, function() {
          $card01front.addClass("grow");
        });
        if (packOpeningCount > 5) resetPackOpening();
      });
      nxt();
    });

     // Card 02
     $card02back.delay(1000).queue(function(nxt) {
      $(this).show();
      $(this).click(function() {
        $(this).hide();
        $card02front.animate({
          width: 'show'
        }, function() {
          $card02front.addClass("grow");
        });
        if (packOpeningCount > 5) resetPackOpening();
      });
      nxt();
    });

    // Card 03
    $card03back.delay(1500).queue(function(nxt) {
      $(this).show();
      $(this).click(function() {
        $(this).hide();
        $card03front.animate({
          width: 'show'
        }, function() {
          $card03front.addClass("grow");
        });
        if (packOpeningCount > 5) resetPackOpening();
      });
      nxt();
    });

    // Card 04
    $card04back.delay(2000).queue(function(nxt) {
      $(this).show();
      $(this).click(function() {
        $(this).hide();
        $card04front.animate({
          width: 'show'
        }, function() {
          $card04front.addClass("grow");
        });
        if (packOpeningCount > 5) resetPackOpening();
      });
      nxt();
    });

     // Card 05
     $card05back.delay(2500).queue(function(nxt) {
      $(this).show();
      $(this).click(function() {
        $(this).hide();
        $card05front.animate({
          width: 'show'
        }, function() {
          $card05front.addClass("grow");
        });
        if (packOpeningCount > 5) resetPackOpening();
      });
      nxt();
    });

    var packOpeningCount = 0;
  
    function resetPackOpening() {
      packOpeningCount = 0;
    }
  };

  
 return (   
    <div id="interface">
      <br></br>
      <meta charset="utf-8"></meta>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>

      <h1>BIRCH Football Card Game</h1>

      <div class="usertitle">Welcome, {userName}!</div>

      <div class="user">
        <div class="card card01">
          <div class="place"></div>
          <div class="face back grow"></div>
          <div class="face front">
            <img src={rarityUrl1} alt="Avatar" style={{"width" : 300,"height" : 400}}></img> 
              <span class="player picture">
                <img src={imageUrl1} alt="Avatar" style={{"width" : 227,"height" : 208}}></img>
              </span>
              <span class='player name'>{name1}</span>
              <span class='player position'>{position1}</span>
              <span id="cardNum1" name="cardNum1" class='player cardNum'>{cardNum1}</span>
              <span class='player type'>{type1}</span>
              <span class='player numberCircle'>{numbercircle1}</span>
          </div>
        </div>
        <div class="card card02">
          <div class="place"></div>
          <div class="face back grow"></div>
          <div class="face front">
            <img src={rarityUrl2} alt="Avatar" style={{"width" : 300,"height" : 400}}></img> 
              <span class="player picture">
                <img src={imageUrl2} alt="Avatar" style={{"width" : 227,"height" : 208}}></img>
              </span>
              <span class='player name'>{name2}</span>
              <span class='player position'>{position2}</span>
              <span id="cardNum2" name="cardNum2" class='player cardNum'>{cardNum2}</span>
              <span class='player type'>{type2}</span>
              <span class='player numberCircle'>{numbercircle2}</span>
          </div>
        </div>
        <div class="card card03">
          <div class="place"></div>
          <div class="face back grow"></div>
          <div class="face front">
            <img src={rarityUrl3} alt="Avatar" style={{"width" : 300,"height" : 400}}></img> 
              <span class="player picture">
                <img src={imageUrl3} alt="Avatar" style={{"width" : 227,"height" : 208}}></img>
              </span>
              <span class='player name'>{name3}</span>
              <span class='player position'>{position3}</span>
              <span id="cardNum3" name="cardNum3"  class='player cardNum'>{cardNum3}</span>
              <span class='player type'>{type3}</span>
              <span class='player numberCircle'>{numbercircle3}</span>
          </div>
        </div>
        <div class="card card04">
          <div class="place"></div>
          <div class="face back grow"></div>
          <div class="face front">
            <img src={rarityUrl4} alt="Avatar" style={{"width" : 300,"height" : 400}}></img> 
              <span class="player picture">
                <img src={imageUrl4} alt="Avatar" style={{"width" : 227,"height" : 208}}></img>
              </span>
              <span class='player name'>{name4}</span>
              <span class='player position'>{position4}</span>
              <span id="cardNum4" name="cardNum4" class='player cardNum'>{cardNum4}</span>
              <span class='player type'>{type4}</span>
              <span class='player numberCircle'>{numbercircle4}</span>
          </div>
        </div>
        <div class="card card05">
          <div class="place"></div>
          <div class="face back grow"></div>
          <div class="face front">
            <img src={rarityUrl5} alt="Avatar" style={{"width" : 300,"height" : 400}}></img> 
              <span class="player picture">
                <img src={imageUrl5} alt="Avatar" style={{"width" : 227,"height" : 208}}></img>
              </span>
              <span class='player name'>{name5}</span>
              <span class='player description'>{detail5}</span>
              <span id="cardNum5" name="cardNum5"  class='player cardNum'>{cardNum5}</span>
              <span class='player type'>{type5}</span>
          </div>
        </div>
      </div>

      <div class="score" id="score">20</div>

      <div class="buttonline">

          <button class="buttonfun open"  onClick={sayHello}> Create Your Squad</button>

          <button class="buttonfun check">
            <Link className="btn btn-link" to={`/collection/${ObjectId}`} style={{color: "black",fontWeight: "bolder"}}>Check Collection</Link>
          </button>

        <form id="addUserForm" onSubmit={onSubmit}>
            <fieldset>
              <input type="hidden" id="CardNum1" name="CardNum1" placeholder="CardNum1" value={cardNum1}></input>
              <input type="hidden" id="CardNum2" name="CardNum2" placeholder="CardNum2" value={cardNum2}></input>
              <input type="hidden" id="CardNum3" name="CardNum3" placeholder="CardNum3" value={cardNum3}></input>
              <input type="hidden" id="CardNum4" name="CardNum4" placeholder="CardNum4" value={cardNum4}></input>
              <input type="hidden" id="CardNum5" name="CardNum5" placeholder="CardNum5" value={cardNum5}></input>

              <input class="buttonfun collect"  type="submit" value="Collect Cards"></input>
            </fieldset>
        </form>

      </div>

    </div> // end of components
 );
}