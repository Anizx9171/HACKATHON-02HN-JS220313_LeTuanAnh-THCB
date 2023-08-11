// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng(space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường[30 điểm]
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.
// ● Ví dụ
// ○ Cho " this is A tEst "; In ra "This Is A Test"
// ○ Cho "heLlo riKkei academy"; In ra "Hello Rikkei Academy”

let str = "                      heLlO          riKkeI           aCadEmY                ";
let arr = str.toLowerCase().split("")
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] != " ") {
        newArr.push(arr[i].toUpperCase())
        continue
    }
    if (arr[i] != " ") {
        if (arr[i - 1] == " ") {
            newArr.push(' ')
            newArr.push(arr[i].toUpperCase())
            i++
        }
        newArr.push(arr[i])
    }

}
console.log(newArr.join(""));