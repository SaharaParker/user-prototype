const arrUsers = [
    "Wynter Watson",
    "Tyler Campbell",
    "Weston Gomez",
    "Alyssa Walker",
    "Adalyn Gross",
]
const objUsers = {
    user0: {
        name: "Wynter Watson",
        email: "retta85@gmail.com",
        phonenumber: "1-515-384-8447",
        username: "wynteron",
        password: "830d96a4",
    },

    user1: {
        name: "Tyler Campbell",
        email: "mara.ratke@hotmail.com",
        phonenumber: "589-312-2159",
        username: "tylerll",
        password: "83bab242",
    },

    user2: {
        name: "Weston Gomez",
        email: "kswift@hotmail.com",
        phonenumber: "438-345-6765",
        username: "westonmez",
        password: "3689e9de",
    },

    user3: {
        name: "Alyssa Walker",
        email: "rachelle53@haag.biz",
        phonenumber: "214-539-8150",
        username: "alyssaer",
        password: "835cbc1d",
    },

    user4: {
        name: "Adalyn Gross",
        email: "edaniel@schuppe.biz",
        phonenumber: "451-281-4053",
        username: "adalyss",
        password: "c1af4f26",
    },
}

for (const arrKey in arrUsers){
    console.log(arrKey);

    console.log("Hi,User!");

    console.log(arrUsers[arrKey])
}