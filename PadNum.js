function PadNum(padSize,num,padChar) {
var paddedNum = String(num);

 while (paddedNum.length < padSize) {
  paddedNum = padChar + paddedNum
}
return paddedNum;
};
