import { useCallback, useState } from 'react';

function ParentComponent(props) {
  const [count, setCount] = useState(0);

  // 컴포넌트가 마운트 될 때만 함수가 정의됨
  const handleClick = useCallback((event) => {
    // 클릭 이벤트 처리
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}
