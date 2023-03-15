const React = require('react');
const { useState, useRef } = React;

function GuGuDan() {
  // 구구단 함수 컴포넌트
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);
  const onChangeInput = (event) => {
    setValue(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (first * second === parseInt(value)) {
      setResult('정답! ' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
    } else {
      setResult('땡!');
      setValue('');
    }
    inputRef.current.focus();
  };
  return (
    <div>
      <div>
        {first}곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChangeInput}
        />
        <button>입력하기</button>
      </form>
      <div>결과 : {result}</div>
    </div>
  );
}
module.exports = GuGuDan;
