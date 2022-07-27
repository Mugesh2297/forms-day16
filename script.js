let allUsers = [];
const populateData = async () => {
    const response = await fetch('https://62e12867fa8ed271c4908043.mockapi.io/task');
    const data = await response.json();
    console.log(data)
    allUsers = data;
    let tbody = document.querySelector(".tablebody")
    
    allUsers.forEach((obj) => {
        let tr = document.createElement("tr");
        Object.keys(obj).forEach((key)=>{
            let td = document.createElement("td");
            if(key==="ChoiceOfFood"){
                let ul= document.createElement("ul");
                obj[key].map(food=>{
                    let li = document.createElement("li");
                    li.innerText=food ;
                    ul.append(li)
                })
                td.append(ul)

            }else{
                td.innerText= obj[key];
            }
            tr.append(td)
        })
        tbody.append(tr)
    });
}

document.addEventListener('DOMContentLoaded', populateData)
document.querySelector("#userForm").addEventListener("submit", submitData);

async function submitData(evt){

    evt.preventDefault();
    let choiseOfFood = [];
    if(document.querySelector("#food1").checked)
    choiseOfFood.push(document.querySelector("#food1").value);
    if(document.querySelector("#food2").checked)
    choiseOfFood.push(document.querySelector("#food2").value);
    if(document.querySelector("#food3").checked)
    choiseOfFood.push(document.querySelector("#food3").value);
    if(document.querySelector("#food4").checked)
    choiseOfFood.push(document.querySelector("#food4").value);
    if(document.querySelector("#food5").checked)
    choiseOfFood.push(document.querySelector("#food5").value);

    let gender = [];
    if(document.querySelector("#radio").checked)
    gender.push(document.querySelector("#radio").value);
    if(document.querySelector("#radio2").checked)
    gender.push(document.querySelector("#radio2").value);


  
    let formDate = {
        FirstName: document.querySelector("#fname").value,
        LastName: document.querySelector("#lname").value,
        Address: document.querySelector("#address").value,
        Pincode: document.querySelector("#Pincode").value,
        State:document.querySelector("#state").value,
        Country: document.querySelector("#country").value,
        ChoiceOfFood: choiseOfFood,
        Gender: gender,
    };
    
    const response= await fetch('https://62e12867fa8ed271c4908043.mockapi.io/task',
    {
        method: 'POST',
        body: JSON.stringify(formDate),
        headers: { "Content-Type": "application/json" },
    }
    );
    const data = await response.json();
    console.log(data)
    location.reload();

}