// 지도를 초기화
const map = L.map('map').setView([0, 0], 2);  // 초기 위치는 (0, 0)으로 설정

// 지도 타일 레이어 추가 (OpenStreetMap 사용)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            map.setView([lat, lon], 15);

            // 사용자 위치에 마커 추가
            L.marker([lat, lon]).addTo(map)
                .bindPopup("<b>현재 위치</b>")
                .openPopup();
        },
        function() {
            alert("위치를 가져올 수 없습니다.");
        }
    );
} else {
    alert("Geolocation이 이 브라우저에서 지원되지 않습니다.");
}
