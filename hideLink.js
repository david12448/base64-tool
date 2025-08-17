// 모든 버튼 클릭 이벤트를 제어하는 함수
function goToPage(encodedUrl) {
    const decodedUrl = atob(encodedUrl); // Base64 복호화
    window.location.href = decodedUrl;
}

// HTML 로드 완료 후 실행
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".link").forEach(button => {
        button.addEventListener("click", () => {
            const encodedUrl = button.dataset.url; // data-url 속성 읽기
            goToPage(encodedUrl);
        });
    });
});

// 마우스 오버 시 주소 숨기기 (브라우저 상태창 차단)
document.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "A" || e.target.closest("a")) {
        window.status = "";
    }
});
