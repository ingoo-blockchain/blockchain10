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

const ingoo = {
    ...job,
    ageGroup: {
        ...job.ageGroup,
        person: {
            ...job.ageGroup.person,
        },
    },
}

ingoo.ageGroup.group = 20
ingoo.ageGroup.person.name = "곽인구"

// console.log(ingoo)
// console.log(job)

const solution = (obj) => {
    if (typeof obj !== "object") return obj

    const result = {}
    for (const key in obj) {
        result[key] = solution(obj[key])
    }

    return result
}

const result = solution(job)

// console.log(result)
console.log(result === job)
console.log(result.ageGroup === job.ageGroup)
console.log(result.ageGroup.person === job.ageGroup.person)
// console.log(result)
