let number = prompt("Enter the number :");
let num = parseInt(number);
let sum = num ;
while (num != -1) {
    num = prompt("Enter the number :");
    alert("Số vừa thêm là :" + num);
    num = parseInt(num);
    sum += num;
    alert("Tổng hiện tại là :" + sum);
}