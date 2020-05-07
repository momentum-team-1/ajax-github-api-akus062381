let dataSection = document.querySelector(".cardname")

fetch( "https://api.github.com/users/akus062381" )

    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        const basics = document.createElement("div")
        basics.className = "basics"
        basics.innerText = ("The Basics")
        dataSection.appendChild(basics)
        const h3El = document.createElement("div")
        h3El.className = "myname"
        h3El.innerText = ("Name:  " + response.name)
        basics.appendChild(h3El)
        const url = document.createElement("a")
        url.className = "linkname"
        url.innerText = ("GitHub URL: " + response.url)
        basics.appendChild(url)
        const company = document.createElement("div")
        company.className = "company"
        company.innerText = ("Company: " + response.company)
        basics.appendChild(company)
        const website = document.createElement("div")
        website.className = "website"
        website.innerText = ("Website: " + response.blog)
        basics.appendChild(website)
        return response;
    })
    .then(function (response) {
        const story = document.createElement("div")
        story.className = "story"
        story.innerText = ("The Story")
        dataSection.appendChild(story)
        const bio = document.createElement("div")
        bio.className = "bio"
        bio.innerText = response.bio
        story.appendChild(bio)
        return response;
    })
    .then(function (response) {
        const avatar = new Image 
        avatar.className = "avatar"
        avatar.src = response.avatar_url
        dataSection.appendChild(avatar)
    })


   
