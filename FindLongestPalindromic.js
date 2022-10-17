const checkPalindrom = (text = "") => {
    let arrayInput = String(text).split(""); // ทำการแยก text ให้อยู่ในรูป array โดยแยกเป็นทีละตัวอักษร
    if (arrayInput.length <= 1000) {
      let testArrayPalindrome = [];
      let thisArrayPalindrome = [];
      let saveArray = [];
      let resultTest;
  
      //ฟังก์ชั่นเช็คว่าเป็น palindrome หรือไม่
      const isPalindrome = (testArray) => {
        while (testArray.length > 1) {
          if (testArray.shift() !== testArray.pop()) {
            return false;
          }
        }
        return true;
      };
  
      //Loop หา palindrome ที่ยาวที่สุด
      for (i = 0; i < arrayInput.length; i++) {
        for (j = i + 1; j <= arrayInput.length; j++) {
          testArrayPalindrome = arrayInput.slice(i, j);
          //ตรงนี้ต้องใช้การ map แทนการแทนค่า thisArrayPalindrome = testArrayPalindrome
          saveArray = testArrayPalindrome.map((e) => e);
          resultTest = isPalindrome(testArrayPalindrome);
  
          //ถ้าเช็คแล้วเป็นจำนวน palindrome ให้เก็บค่าตัวที่มีสมาชิกยาวที่สุดใส่ใน thisArrayPalindrome
          if (resultTest === true) {
            if (thisArrayPalindrome.length < saveArray.length) {
              thisArrayPalindrome = saveArray;
            }
          }
        }
      }
      // เปลี่ยน array ที่มีสมาชิกหลายตัวให้กลับมาอยู่ในรูป text ที่สมาชิกทุกตัวติดกันหมดแล้ว
      thisArrayPalindrome = thisArrayPalindrome.reduce((value, e) => {
        const text = e + value;
        return text;
      });
  
      return thisArrayPalindrome;
  
    }else{
      return "จำนวนตัวอักษรมากกว่า 1000 ตัวอักษรกรุณาใส่ให้น้อยกว่า 1000 ตัวอักษร"
    }
  };
  
  console.log(checkPalindrom("annaaaaaaann"));
  