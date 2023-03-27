//배열을 객체로 변환하고 싶다면 reduce() 함수를 사용
//배열 [1, 2, 3, ..., 10]의 합을 계산하는 sum() 함수를 reduce() 함수를 이용하여 만든 것

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//55

