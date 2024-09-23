function skillsMember() {
    var skills = [];
    var skill = document.getElementById("skill").value;
    skills.push(skill);
    document.getElementById("skill").value = "";
    console.log(skills);
    return skills;
}