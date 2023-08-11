// Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào: nhập tháng 8 năm 2023
// ● Đầu ra: số ngày trong tháng đó là 31

let year = +prompt("Nhập năm");
let month = +prompt("nhập tháng");
if (year % 4 == 0) {            //
    if (year % 100 == 0) {      // kiểm tra năm nhuận
        if (year % 400 == 0) {  //
            // nếu là năm nhuận
            switch (month) {
                case 2:
                    alert("tháng có 29 ngày")
                    break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 9:
                case 11:
                    alert("tháng có 31 ngày")
                    break;
                case 4:
                case 6:
                case 8:
                case 10:
                case 12:
                    alert("tháng có 30 ngày")
                    break;
                default:
                    alert("Không có tháng này")
            }
        }
        // không thỏa mãn điều kiện => không phải năm nhuận
        else {
            switch (month) {
                case 2:
                    alert("tháng có 28 ngày")
                    break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 9:
                case 11:
                    alert("tháng có 31 ngày")
                    break;
                case 4:
                case 6:
                case 8:
                case 10:
                case 12:
                    alert("tháng có 30 ngày")
                    break;
                default:
                    alert("Không có tháng này")
            }
        }
    } else {
        switch (month) {
            case 2:
                alert("tháng có 29 ngày")
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
            case 11:
                alert("tháng có 31 ngày")
                break;
            case 4:
            case 6:
            case 8:
            case 10:
            case 12:
                alert("tháng có 30 ngày")
                break;
            default:
                alert("Không có tháng này")
        }
    }
} else {
    switch (month) {
        case 2:
            alert("tháng có 28 ngày")
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            alert("tháng có 31 ngày")
            break;
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            alert("tháng có 30 ngày")
            break;
        default:
            alert("Không có tháng này")
    }
}