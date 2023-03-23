// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr)

// arr.map((data)=>{
//     console.log(data)
// })
let DB = []
a()

let div = document.getElementById('box')
let title = document.getElementById('description')
async function a() {
    try {
        let res = await axios.get("https://dummyjson.com/products")
        let data = res.data.products.splice(0, 5)
        console.log(data);

        DB.push(data);
        data.map((data) => {

            return (
                div.innerHTML += `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <button onclick="pop(${data.id,data.price,data.title})">${"Rs:" + data.price}</button>

        `
            )
        })
    } catch (error) {
        console.log(error)
    }
}

function pop(id,price,title) {
    alert()
    console.log(id,price,title)
}