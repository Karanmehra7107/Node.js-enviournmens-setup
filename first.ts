interface adm{

    name:string,
    email:string,
    phone_no:number,
    course:string,
    city:string,
    state:string,

}
function lpuadmission(b:adm){
    console.log(`${b.name}${b.email}${b.phone_no}${b.course}${b.city}${b.state}`) //template string
}
let a={
    name:"karan",
    email:"karan@gmail.com",
    phone_no:123456789,
    course:"bca",
    city:"jalandhar",
    state:"punjab",   
}
lpuadmission(a);