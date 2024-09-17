let inbut = document.querySelector("input")
let botton = document.querySelector(".get-button")
let text = document.querySelector(".show-data")

let deletee = document.querySelector(".delete-button")



botton.addEventListener("click" , function(){
fetch(`https://api.github.com/users/${inbut.value}/repos`).then(
    (res)=>{
        return res.json()
    }
).then(
    (data)=> {
            if(inbut.value===""){
            text.innerHTML = `<span> Please enter your username </span>`
}else{
     text.innerHTML = ""
     data.forEach((ele) => {
        let div = document.createElement("div")
        let reponame = document.createTextNode(ele.name)
        let url = document.createElement("a")
        let urltext = document.createTextNode("visit")
        let star = document.createElement("span")
        let div2 = document.createElement("div")
        let startext = document.createTextNode(` star : ${ele.stargazers_count}`)
        url.setAttribute("href" , `https://github.com/${inbut.value}/${ele.name}`)
        url.setAttribute("target", "_blank")
        url.appendChild(urltext)
        star.appendChild(startext)
        div.appendChild(reponame)
        
        div2.appendChild(url)
        div2.appendChild(star)
        div.appendChild(div2)

        div.className = "box"
        text.appendChild(div)
        inbut.value = ""
     });
    
    
}
    }
)
})

deletee.addEventListener("click", function(){
    if(text.children.length === 1) {
  console.log("no delete")
    }else{
        text.innerHTML = "<span>Deleted successfully</span>"
    }
    
})

