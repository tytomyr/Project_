let counter = "";
const btn = document.getElementById("btn");
const userContainer = document.getElementById("info")

btn.addEventListener('click', function(){
    const request = new XMLHttpRequest();
    request.open('GET', 'https://tytomyr.github.io/JSON/users.'+counter+'json');
    request.onload = function() {
    const data = JSON.parse(request.responseText);
    render(data);
    };
     request.send(); 
    counter = 'new';
});

function render(myData){
let newUser = ' ' ;

for (let i = 0; i <myData.length; i++){    
newUser += '<div class="user">' + '<h2>'+ 'User ID:' + myData[i].id + '</h2>' 
+ '<p> ' + 'Email : ' + myData[i].email  +'</p>'
+ '<p> ' + 'First Name : ' + myData[i].first_name  +'</p>'
+ '<p> ' + 'Last Name : ' + myData[i].last_name  +'</p>'
+ `<img src="${myData[i].photo}" alt="">` 
+ '</div>'
}
userContainer.insertAdjacentHTML("beforeend", newUser)
}





