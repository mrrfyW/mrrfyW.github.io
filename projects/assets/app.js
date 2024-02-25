document.addEventListener("DOMContentLoaded", function() {
    // Assuming your projectsData is defined here
    let projectsData = [
        {
            "name": "Pokemon Horizons Episode List",
            "description": "Join the journey of Liko and Roy on their adventures with this website!",
            "img": "https://i.ibb.co/yBb5XSq/horizon.png",
            "url": "https://pokermmon.github.io"
        },
        {
            "name": "Simple Snipers VS Runners (Rec Room)",
            "description": "A (somewhat) high quality recreation of a low-effort room.",
            "img": "https://i.ibb.co/Jczwz6M/simplesniper.png",
            "url": "https://rec.net/room/SimpleSnipersVSRunners"
        },
		{
			"name": "MrFurretGO's Custom Site",
            "description": "Making a personal site is easy with ChatGPT and some minor adjustments.",
            "img": "https://i.ibb.co/zHDQd1k/otherimage.png",
            "url": "https://mrfurretgo.github.io"
		}
    ];

    // Loop over the projectsData
    projectsData.forEach((item, i) => {
        // Create a new div element
        let div = document.createElement('div');
        div.className = 'projects-box';
        div.style.setProperty('--i', i); // Add this line

        // Create elements for the item details
        let img = document.createElement('img');
        let detailsDiv = document.createElement('div');
        let name = document.createElement('h2');
        let description = document.createElement('p');
        let link = document.createElement('a');

        // Set the src, innerHTML, and href attributes using data from the projectsData
        img.src = item.img;
        name.innerHTML = item.name;
        description.innerHTML = item.description;
        link.innerHTML = 'Link';
        link.href = item.url;

        // Append the name, description, and link to the details div
        detailsDiv.appendChild(name);
        detailsDiv.appendChild(description);
        detailsDiv.appendChild(link);

        // Append the img and details div to the projects-box div
        div.appendChild(img);
        div.appendChild(detailsDiv);

        // Append the div to the projects-container
        document.getElementById('projects-container').appendChild(div);
    });
});