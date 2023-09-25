async function getdata() {
    return ("welcome to js await");
}
const data=getdata();
data.then((response)=>console.log(response))