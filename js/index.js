function ok(){
var name = document.getElementById("name-user").value;



if(name == "")
{
  alert("Please Enter Name")
}
else
{
  document.getElementById("login").style.display = "none"
  document.getElementById("window").style.display = "block"
  document.getElementById("uname").innerHTML = name;
}

}

function display(id)
{
    document.getElementById(id).style.display = "block"
    

}

function hide(id)
{
    document.getElementById(id).style.display = "none"
}
// <!---------------------- Calculator-------------------- -->
function insert(num)
    {
        document.form.answer.value += num; 
    }

    function equal()
    {
        document.form.answer.value = eval(document.form.answer.value);

    }
    // <!---------------------- Fetch github profile -------------------- -->
    function get_github_data() {
        var input_username = document.getElementById('user_name').value;
        var card_div = document.getElementById('avatar-card');
        var get_profile_pic = document.getElementById('profile_pic');
        var get_git_user = document.getElementById('git_user');
        var get_git_user_location = document.getElementById('git_user_location');
        var get_git_user_id = document.getElementById('git_user_id');
        var get_git_repo = document.getElementById('git_repo');
        var get_git_following = document.getElementById('git_following');
        var get_git_followers = document.getElementById('git_followers');
    
    
        if(input_username != '')
        {
            fetch('https://api.github.com/users/' + input_username)
            .then(response => response.json())
            .then(data => {
                card_div.style = 'display:block';
                document.getElementById('error_div').style = 'display:none';
                console.log(data)
                
                get_profile_pic.style.backgroundImage = 'url('+data.avatar_url+')';
                get_git_user.innerHTML = data.login;
                get_git_user_location .innerHTML= 'Location: ' + data.location;
                get_git_user_id.innerHTML = 'User Id: ' + data.id;
                get_git_repo.innerHTML = data.public_repos;
                get_git_following.innerHTML = data.following;
                get_git_followers.innerHTML = data.followers; 
    
                var get_git_link = document.getElementById('git_link');
                    get_git_link.setAttribute('href', data.html_url);
                    get_git_link.setAttribute('target', '_blank');
    
                    document.getElementById('user_name').value = '';
                
                if(data.message == 'Not Found')
                {
                    card_div.style = 'display:none';
                    document.getElementById('error_div').style = 'display:block';       
                }
               
            })
            .catch(err => console.log(err))          
        }
    
        else
        {
            alert('Please Enter Username')
        }
    }

// <!---------------------- wheather -------------------- -->


    var input = document.getElementById('user-input');
var main = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var day = document.getElementById('day');
var button= document.getElementById('btn');
var kel = document.getElementById('kel');
var fehr = document.getElementById('fehr');
var bg = document.getElementById('bg');
var bg2 = document.getElementById('bg2');
input.value.toLowerCase()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var dayname = new Date()



function get_data()
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  var cnvtempValue = tempValue - 273.15;
  cnvtempValue = Math.floor(cnvtempValue)

   var calfehr = Math.floor((cnvtempValue * 9/5) + 32)
if(input.value == "karachi")
{
 
  bg2.style.backgroundImage = "url('./img/khi.jpg')";
}
else if(input.value == "paris")
{

  bg2.style.backgroundImage = "url('./img/paris.jpg')";
}
 else if(input.value == "lahore")
{
 
  bg2.style.backgroundImage = "url('./img/lhr.jpg')";
}
else if(input.value == "london")
{

  bg2.style.backgroundImage = "url('./img/london.jpg')";
}
else
{
  
  bg2.style.backgroundImage = "url('./img/cover.jpg')"

}
  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = cnvtempValue + "<span>&deg;C</span>" ;
  day.innerHTML = days[dayname.getDay()]
  fehr.innerHTML = calfehr+ "<span>&deg;F</span>"
  kel.innerHTML = tempValue + "<span>&deg;K</span>"
  input.value ="";
  

})

.catch(err => alert(err));
}


// function clock() {
//   var session = "AM";
//   var now = new Date();

//   var h = now.getHours();
//   var m = now.getMinutes();
  
 

//   m = check(m);
  
//   h = check(h);


 
//   function check(i) {
//       if (i < 10) {
//           i = "0" + i;
//       }
//       return i;
//   }
//   if (h > 11) {
//       session = "PM";
     
//   }


//   var time = h + " : " + m +  " " + session;
//  var date = d + "/" + m + "/" + y

//   document.getElementById("time").innerHTML = time;
//   document.getElementById("date").innerHTML = date;
// }





// setInterval(clock, 0);



function clock() {
  var session = "AM";
  var now = new Date();

  var h = now.getHours();
  var m = now.getMinutes();
  
  var d = now.getDate();
  var mn = now.getMonth();
  var y = now.getFullYear();

  m = check(m);
  
  h = check(h);


  // h = (h < 10) ? "0" + h : h;
  // m = (m < 10) ? "0" + m : m;
  // s = (s < 10) ? "0" + s : s;

  function check(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }
  if (h > 11) {
      session = "PM";
     
  }


  var time = h + " : " + m +  " " + session;
  var date = (mn+1) + "/" + d + "/" + y
 

  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}





setInterval(clock, 0);


let start_apear = ()=>
{

  start = document.getElementById("start")
  if(start.style.display == "block")
  {
    start.style.display = "none"
  }
  else
  {
    start.style.display = "block"
  }
  
}

let bg_list = id=>
{
  document.getElementById(id).style.display = "block"
  start.style.display = "none"
}
let change = img=>
{
  document.getElementById("window").style.backgroundImage = `url(${img})`
}