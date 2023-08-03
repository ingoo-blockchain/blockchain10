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

console.log(job)

const ingoo = {
    ...job,
    ageGroup: {
        ...job.ageGroup,
        person: {
            ...job.ageGroup.person,
        },
    },
}

console.log(job === ingoo)
console.log(job.ageGroup === ingoo.ageGroup)
console.log(job.ageGroup.person === ingoo.ageGroup.person)

console.log(obj)

// 재귀함수
const solution = (obj) => {
    if (typeof obj !== "object") return obj

    const result = {}
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = solution(obj[keys[i]])
    }

    return result
}

const result = solution(job)

console.log(job === result)
console.log(job.ageGroup === result.ageGroup)
console.log(job.ageGroup.person === result.ageGroup.person)

// 오늘 WSL 할려고했엇는데
// JS 기초를 조금

// 금 class
// 월 런타임
// 화 async/await -> callback, promise
