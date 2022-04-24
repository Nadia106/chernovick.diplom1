export const genres = {
    military: {
        _id: "11rb765512bkk65441201",
        name: "Военный",
        color: "success"
    },
    detective: {
        _id: "11rb765512bkk65441202",
        name: "Детектив",
        color: "warning"
    },
    drama: {
        _id: "11rb765512bkk65441203",
        name: "Драма",
        color: "warning"
    },
    foreignClassics: {
        _id: "11rb765512bkk65441204",
        name: "Зарубежная классика",
        color: "secondary"
    },
    historical: {
        _id: "11rb765512bkk65441205",
        name: "Исторический",
        color: "info"
    },
    counterculture: {
        _id: "11rb765512bkk65441206",
        name: "Контркультура",
        color: "danger"
    },
    romanceNovel: {
        _id: "11rb765512bkk65441207",
        name: "Любовный роман",
        color: "info"
    },
    mystique: {
        _id: "11rb765512bkk65441208",
        name: "Мистика",
        color: "secondary"
    },
    prose: {
        _id: "11rb765512bkk65441209",
        name: "Проза",
        color: "secondary"
    },
    psychology: {
        _id: "11rb765512bkk65441210",
        name: "Психология",
        color: "warning"
    },
    realism: {
        _id: "11rb765512bkk65441211",
        name: "Реализм",
        color: "dark"
    },
    russianClassics: {
        _id: "11rb765512bkk65441212",
        name: "Русская классика",
        color: "primary"
    },
    modernLiterature: {
        _id: "11rb765512bkk65441213",
        name: "Современная литература",
        color: "success"
    },
    referenceLiterature: {
        _id: "11rb765512bkk65441214",
        name: "Справочная литература",
        color: "info"
    },
    thriller: {
        _id: "11rb765512bkk65441215",
        name: "Триллер",
        color: "danger"
    },
    horrors: {
        _id: "11rb765512bkk65441216",
        name: "Ужасы",
        color: "dark"
    },
    fantastic: {
        _id: "11rb765512bkk65441217",
        name: "Фантастика",
        color: "primary"
    },
    fantasy: {
        _id: "11rb765512bkk65441218",
        name: "Фэнтези",
        color: "success"
    }
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(genres)
        }, 1500)
    })
export default {
    fetchAll
}