console.log("Hello")

card = document.getElementsByClassName("card")
console.log(card)

// 명시적 강제 변환: new를 붙이지않으면 랩퍼객체생성이 아닌 타입변환함수로 작동
console.log(String(3))
console.log(String(false))
console.log(String(null))


console.log(parseInt("3B", "4"))