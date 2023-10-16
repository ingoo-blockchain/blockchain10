export function formatKST(date) {
  // 시간대 오프셋을 적용하여 Date 객체 업데이트
  const offset = date.getTimezoneOffset() + 9 * 60; // 현재 시간대와 KST의 차이 계산
  date = new Date(date.getTime() + offset * 60 * 1000); // 오프셋을 밀리초로 변환하여 더함

  // 각 부분 추출
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth는 0부터 시작하므로 1을 더함
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // 문자열로 조합
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}
