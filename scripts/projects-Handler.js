var projectsDiv=document.getElementById("projects");

for(let i=0 ; i < projects.length ; i++){

let currentProject=projects[i];


// my  div

let myprojectDiv=document.createElement("div");

let myprojectdivStyle=document.createAttribute("style");

myprojectdivStyle.value="display:inline-block; width:300px; margin:10px;"

myprojectDiv.setAttributeNode(myprojectdivStyle);

// my title or h3


let title=document.createElement("h3");

let titleNode= document.createTextNode(currentProject.title)

title.appendChild(titleNode);


// my project image

let image=document.createElement("img");

let source=document.createAttribute("src");
source.value="./images/"+ currentProject.img;


let imageStyle=document.createAttribute("style");
imageStyle.value="width:200px;";




image.setAttributeNode(source);
image.setAttributeNode(imageStyle);


// my project p

let para=document.createElement("p");

let paraText=document.createTextNode(currentProject.description);

para.appendChild(paraText);


// put elements in the div

myprojectDiv.appendChild(title);
myprojectDiv.appendChild(image);
myprojectDiv.appendChild(para);



projectsDiv.appendChild(myprojectDiv)



}