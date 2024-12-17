const person = {
    name : 'odongdang',
    age : 30,
    gender : '남자',
    height : 170
}

// 객체의 구조 분해 할당
const { name, age, ...rest } = person

console.log(name);  // 출력 : 'odongdang'
console.log(age);   // 출력 : 30
console.log(rest);  // 출력 : { gender : '남자', height : 170 }

