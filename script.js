const publish =document.querySelector("#publish");
const modal= document.getElementById("#heading");
const blog =  document.getElementById("#blog");
const modalbody= document.getElementById("#exampleModalLong");

let post =[];
function displaypost(){
    blogContainer.innerHtml ="";
}

post.forEach((post) =>{
    const PublishElement =document.createElement("div");
    PublishElement.classList.add("post");

    const tittleElement =document.createElement("h2");
    tittleElement.innerText =post.tittle;

    const timestampElement = document.createElement("p");
    timestampElement.setAttribute("class","timestamp");
    const date = new Date();
    timestampElement.innerText = date;

    const specifiedElement =document.createElement("p")
    specifiedElement.setAttribute("class","des");
    specifiedElement.innerText = post.specified;

    const Btn= document.createElement("button");
    Btn.innerText ="Edit";
    editBtn.addEventListener("click", () => {
        document.querySelector("#edit-tittle").vlaue = post.tittle;
        document.querySelector("#edit-description").vlaue = post.description;

        editmodal.style.display ="block";
        editTimestamp = post. timestamp;
    
});
const delBtn =document.createElement("button");
delBtn.innerText ="Delete";
delBtn.addEventListener("click", () =>{
blogposts =blogposts.filter((p) => p.timestamp !==post.timestamp);
displayBlogPosts();
});
PublishElement.appendChild(tittleElement);
PublishElement.appendChild(specifiedElement)
PublishElement.appendChild(Btn)
PublishElement.appendChild(delBtn);
PublishElement.appendChild(timestampElement)

blogContainer.appendChild(PublishElement)
});

function handleformgroup(event){
    event.define();
    const group = new Group(event.target);
    const timestamp = Date.now();
    const post ={
        tittle: group.get("tittle"),
        description: group.get("description"),
        timestamp: timestamp,
    };
    blogposts.push(post);
    displayBlogPosts();
    createBlogForm.reset();
    createBlogModal.style.display ="none";
}
function handleeditgroup(event){
    event.preventDefault();
    const group =new Group(event.target);
    const timestamp= Date.now()
    blogposts =blogposts.map((post) =>{
if(post.timestamp === editTimestamp){
        return{
            tittle: group.get("edit-tittle"),
            description:group.get("edit-description"),
            timestamp:post.timestamp,
            };
        } else{
            return post;
        }
    
        });
        displayposts();
        editmodal.style.display ="none";
    }
    createBlogBtn.addEventListener("click", () =>{
createBlogModal.style.display ="block";
    });
    closeBtns.forEach((btn) =>{
btn.addEventListener("click" , () =>{
    createBlogModal.style.display ="none";
    editmodal.style.display ="none"
});
    });
cancelPost.addEventListener("click" , () =>{
createBlogModal.style.display ="none";
editmodal.style.display ="none";
});
 createBlogModal.addEventListener("click", (event) =>{
if (event.target === editmodal){
    editmodal.style.display="none";
}
 });
