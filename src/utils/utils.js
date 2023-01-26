export const timeCalculator = (writtenAtTime) => {
  const writtenTime = new Date(writtenAtTime);
  const now = new Date();

  const diffMin = now - writtenTime;

  if (diffMin < 6000000) {
    return "방금전";
  } else if (diffMin < 360000000) {
    const min = Math.floor((diffMin / (1000 * 60)) % 60);
    return `${min}분 전`;
  } else if (diffMin < 86400000000) {
    const hour = Math.floor((diffMin / (1000 * 60 * 60)) % 24);
    return `약 ${hour}시간 전`;
  }
  // toDo 일단위 계산표시 구현하기
  const date = Math.floor(diffMin / (1000 * 60 * 60 * 24));
  return `${date}일 전`;
};
