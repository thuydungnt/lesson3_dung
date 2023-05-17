//bai 1 Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. 
//Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
const arr1 = [1,2,3,4,5,6];
const arr2 = [1,6,8,9,0];
const gop = [...arr1, ...arr2];
// console.log(gop);
const newGop = gop.filter((item, index) => gop.indexOf(item) !== index);
  console.log(newGop);

  //bai 2
  const A = [1,54,6,7];
  const newArr = A.map((value) => {
    return value + 5;
  }
  )
  console.log(newArr)

  //bài 3:Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. 
  //Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
  const arr3 = [1,2,4,5,6,7];
  const arr4 = [3,5,675,8,96];
  const gopArr = [...arr3, ...arr4];
  const arr5 = [1, 8,10,96,7];
  const loc = [];
  for (let i = 0; i < arr5.length; i++) {
    if( loc = gopArr.filter(n => n !== i)){
        loc.push(gopArr[i])
    }};
    console.log(loc)

    //bai 4:
    const players = [
        { id: 11, name: 'Messi', age: 33 },
        { id: 12, name: 'Ronaldo', age: 34 },
        { id: 13, name: 'Young', age: 35 },
        { id: 14, name: 'Mane', age: 21 },
        { id: 15, name: 'Salah', age: 24 },
  ]
  
  const playersModified = convertArrayToObject(players, 'id');
