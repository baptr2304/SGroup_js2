var employees = [
    {
        id : 1,
        name :'Nguyen Van A',
        email : 'a@gmail.com',
        salary: 10000000,
        city: 'Da Nang'
    },
    {
        id : 2,
        name :'Nguyen Van B',
        email : 'b@gmail.com',
        salary: 10000000,
        city: 'Hai Phong'
    },
    {
        id : 3,
        name :'Nguyen Van C',
        email : 'c@gmail.com',
        salary: 10000000,
        city: 'Quy Nhon'
    },
]
var index = employees.length
console.log(index)
function renderEmployee(arr){
    var renderEmp = document.getElementById('list');
    renderEmp.innerHTML = '';
    arr.forEach(function render(item){
        renderEmp.innerHTML = renderEmp.innerHTML + `
        <td style="visibility: hidden">${item.id}</td>
        <td><input value = "${item.name}" disabled/></td>
        <td><input value = "${item.email}" disabled/></td>
        <td><input value = "${item.salary}"disabled/></td>
        <td><input value = "${item.city}"/disabled></td>
        <td><button onclick="editEmp(${item.id})" class="btn_edit">Edit</button>
        <button onclick="deleteEmp(${item.id})" class="btn_delete">Delete</button></td>
        `;
    }
    );
}
renderEmployee(employees);
function addEmployee(){
    let id = employees.length + 1
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let salary = document.getElementById('salary').value;
    let city = document.getElementById('city').value;
    employees.push({
        id : id,
        name: name,
        email: email,
        salary: salary,
        city: city
    });
    renderEmployee(employees)
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('city').value = '';
}

function deleteEmp(){
    let idx = employees.id
    employees.splice(idx,1);
    renderEmployee(employees);
}
