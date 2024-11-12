const capsData = [
    { name: "겨울 방한 캡쮸리", imageUrl: "sc/store01.png" },
    { name: "여름 시원 캡쮸리", imageUrl: "sc/store02.png" },
    { name: "봄 꽃잎 캡쮸리", imageUrl: "sc/store03.png" },
    { name: "가을 단풍 캡쮸리", imageUrl: "sc/store04.png" }
];

// 로그인 함수 (예시)
function loginUser(username) {
    // 로컬 스토리지에 로그인 정보 저장
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    alert("로그인되었습니다!");
}

// 로그아웃 함수 (예시)
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    alert("로그아웃되었습니다!");
}

// 로그인 여부 확인 함수
function isUserLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}


function purchaseItem(item) {
    if (!isUserLoggedIn()) {
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        window.location.href = "login.html"; // 로그인 페이지로 이동
        return;
    }

    const isConfirmed = confirm("캡쮸리를 구매하시겠습니까?");
    
    if (isConfirmed) {
        alert("구매가 완료되었습니다.");
        addItemToUserInventory("겨울방한 캡쮸리"); // 캡쮸리 목록에 추가
        item.remove(); // 아이템 삭제
    }
}

// 사용자 캡쮸리 목록에 아이템 추가
function addItemToUserInventory(itemName) {
    const username = localStorage.getItem("username");
    let inventory = JSON.parse(localStorage.getItem(username + "_inventory")) || [];
    inventory.push(itemName);
    localStorage.setItem(username + "_inventory", JSON.stringify(inventory));
}
