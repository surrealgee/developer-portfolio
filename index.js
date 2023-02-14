function setHoverhandlers() {
  const projectElements = document.getElementsByClassName("project");

  for (let project of projectElements) {
    project.firstElementChild.addEventListener("mouseenter", () => {
      project.lastElementChild.style.display = "flex";
    });

    project.lastElementChild.addEventListener("mouseleave", () => {
      project.lastElementChild.style.display = "none";
    });
  }
}

setHoverhandlers();
