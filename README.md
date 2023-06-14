의문점

1. 왜 콘솔에 todos가 전부 찍히지 않는가??? / 콘솔에 찍히는 값이 추가되기 전 값이 나온다
   화면상: a3, a2, a1 콘솔상 : `['a2', 'a1']`
   const onSubmit = (event) => {
   event.preventDefault();
   if (todo === "") {
   return;
   }
   setTodos((currentArray) => [todo, ...currentArray]);
   setTodo("");
   console.log(todos);
   };

해답: useState는 비동기식이다(호출시점에서 결과를 기다리지 않음)
setTodos로 값을 바꾸는 작업을 하는 도중 콘솔로그가 찍혀 이전의 값이 나오게 된다

참고 : https://stackoverflow.com/questions/54867616/console-log-the-state-after-using-usestate-doesnt-return-the-current-value

2. 인덱스랑 데이터값이 역전되어서 나오는 이유가 뭐지???
`0번째 값 a3`
`1번째 값 a2`
`2번째 값 a1`
{todos.map((item, index) => (
<li key={index}>
`{index}번째 값 {item}`
</li>
))}

key는 다른 항목들 사이에서 고유하게 식별할 수 있는 것을 사용합니다

렌더링 한 항목에 부여할 id값이 마땅히 없다면 index를 key로 사용할 수 있습니다.
하지만 순서가 바뀔 수 있는 경우에는 key에 인덱스를 사용하는 것은 권장하지 않는다!!
이로인해 성능이 저하되거나 state와 관련된 문제가 발생할 수 있다!
만약 리스트에 key를 지정하지 않으면 React는 기본적으로 index를 key로 사용합니다

useEffect는 항상 함수를 반환해야함
아무것도 반환하지 않거나 메모리누수를 방지하기 위한 clean-up함수만을
반환해야함
그래서 async await를 잘못쓰면 프로미스객체를 반환하게 되어 에러가남
직접으로는 쓸 수 없으니 간접적으로 써야함
useEffect(async() => { await fuc()});

그래서 useEffect 내부에 async함수를 선언해주고 바로 호출하기
useEffect(() => {
const a async () => {
const b = await c()
}
a();
},[]);

프로미스객체란???
Promise는 자바스크립트에서 제공하는 비동기에 사용되는 객체

React Router
url을 이용하여 페이지 전환할 떄 씀
url을 보고있다가 사용자가 특정 url로 이동했을 떄 어떤 걸 보여줄 지 결정

const getMovie = async () => {
const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
const json = res.json();
console.log(json);
setMovies(json);
setLoading(false);
};
useEffect(() => {
getMovie();
}, []);

useEffect를 써서 fetch를 할 때 두가지 방법이 있다

1. fetch.then() 방법

2. async / await 방법

그리고 지금 어떤 방법을 써도 movies에 값이 안들어가고, 그래서 map()이 오류를 띄운다
