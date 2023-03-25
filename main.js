let object ={};

for (let i = 0;  i<= 10; i++) {
   let name = prompt('Введите ваш имя');
   let age = +prompt('Введите ваш возраст')
   
   object['pol' + i] = ' Пользователь ' + i;
   object['name' + i] = ` Ваше имя ${name}` ;
   object['age' + i] =  ` Ваш возраст  ${age}`;
   
}
for(let key in object) {
    console.log(object[key]);
}