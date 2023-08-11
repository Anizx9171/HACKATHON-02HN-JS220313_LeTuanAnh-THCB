// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort[30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr = [3, 25, 38, 49, 12]; In ra arr = [49, 38, 25, 12, 3]

let arr = [3, 25, 38, 49, 12];

//cách 1 dùng hàm sort:

// arr.sort((a, b) => b - a)
// console.log(arr);



//cách 2 không dùng hàm sort:

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
        if (arr[j] > arr[j - 1]) {
            let a = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = a;
        }
    }
}

console.log(arr);