const openPackedList = [
    { label: "packed", value: "packed" },
    { label: "open", value: "open" },
];
const ripenessList = [
    { label: "chooese ripness", value: "" },
    { label: "green", value: "green" },
    { label: "ripe/mature", value: "ripe/mature" },
    { label: "advanced", value: "advanced" },
    { label: "too ripe", value: "too ripe" },
];
const frozenList = [
    { label: "yes", value: "yes" },
    { label: "no", value: "no" },
];

const loginField = [
    {
        id: 0,
        placeHolder: "Email",
        value: '',
        secure: false
    },
    {
        id: 1,
        placeHolder: "Password",
        value: '',
        secure: true
    },
];

const signUpField = [
    {
        id: 0,
        placeHolder: "First name",
        value: '',
        secure: false
    },
    {
        id: 1,
        placeHolder: "Last name",
        value: '',
        secure: false
    },
    {
        id: 2,
        placeHolder: "email",
        value: '',
        secure: false
    },
    {
        id: 3,
        placeHolder: "Password",
        value: '',
        secure: true
    },
    {
        id: 4,
        placeHolder: "Confirm password",
        value: '',
        secure: true
    },
];

export {openPackedList,ripenessList,frozenList,loginField,signUpField};