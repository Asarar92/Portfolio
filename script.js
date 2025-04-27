const socialsEl = document.querySelector(".socials");
const projectsContainer= document.querySelector(".projects");

const socialHandles = [
  {
    Link: "https://x.com/AsararAhmed2",
    platform: "twitter",
  },
  {
    Link: "https://github.com/Asarar92",
    platform: "github",
  },
  {
      Link: "mailto:connect.asarar@gmail.com",
      platform: "email",
  }
];

const projectsArray = [
  {
    title: "Global Explorer",
    techStack: "CSS,React, ContextAPI",
    imgSrc: "/resources/img/Country-Api.png",
    desc: "A website where different countries data is fetched and dispalyed .",
    githubLink: "https://github.com/Asarar92/Country-API-react",
    demoLink: "https://country-api-r.netlify.app/",
  },

  {
    title: "Focus On Today",
    techStack: "HTML, CSS , JS",
    imgSrc: "/resources/img/Todo.png",
    desc: " A website inspired by frontend mentor challenge",
    githubLink: "https://github.com/Asarar92/Focus-On-Today",
    demoLink: "https://focus-on-today-vanialla.netlify.app/",
  },

  {
    title: "BurgurMania",
    techStack: "HTML, CSS , JS",
    imgSrc: "/resources/img/Burgur.png",
    desc: " Implemented the hamurgur dropdown  and  made the design reponsive for different devices",
    githubLink: "https://burgurmania.netlify.app/",
    demoLink: "https://github.com/Asarar92/BurgerMania",
  },


];

socialHandles.forEach((social, index) => {
  const a = document.createElement("a");
  a.href = social.Link;
  a.textContent = social.platform;
  a.target = "_blank";

  socialsEl.appendChild(a);
});


projectsArray.forEach((project)=>{
    const projectEL = document.createElement("div")
    projectEL.className = "project"

    projectEL.innerHTML = `
     <img src="${project.imgSrc}" alt="" loading="lazy">
            <div class="project-content">
                <p class="project-heading">${project.title}</p>
                <P class="tech-stack">${project.techStack}</p>
                <p class="discription">${project.desc}</p>
              <div class="project-links">
                <a target="_blank" href="${project.demoLink}">demo &nbsp;</a>
                <a target="_blank" href="${project.githubLink}">code</a>
              </div>
            </div>
    `;

   projectsContainer.append(projectEL)

});