function sendMail(){
    var person={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value,
    }
const serviceID="service_etja5jb"
const templateID="template_pb2mjvm"

emailjs.send(serviceID,templateID,person)
    .then(
        res=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res)
            alert("send your massage successfully");
        }
    )
    .catch((err)=>console.log(err))
}