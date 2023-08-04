# Class

## 분류 (Classification)

새

-   비둘기
-   참새

의자

-   공통된 속성이 존재했다

의자

다리가있다
앉을수있다
등받이가있다

```js
class 의자 {
    다리가있다
    앉을수있다
    등받이가있다
}

const chiar = new 의자()
```

```js
class 게시판 {
    번호
    주제
    내용
    작성자
    등록일
    조회수
}

const 게시글 = new 게시판("1", "주제", "내용", "작성자", "등록일", "조회수")
```

```js
const job = {
    job: "senior developer",
    career: "10",
    ageGroup: {
        group: 30,
        person: {
            name: "ingoo",
            id: "web7722",
        },
    },
}

function Job(_job) {
    // this = {}
    this.job
    console.log(_job)
    // return this
}

const job = new Job("senior")

class Job {
    job
    constructor(_job) {
        // this = {}
        console.log(_job)
        // return this
    }
}

const job = new Job("senior")

const job2 = new Job()
```
