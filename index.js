let companies = [
    {
        companyName: "SODEXO INC",
        location: "Kansas City, MO",
        timePeriod: "Nov 2024 - Present",
        role: "Business Operations Data Intern",
        description: [
            "Conduct data collection and cleansing to ensure accuracy and compliance.",
            "Transform raw data into actionable insights for small-scale analysis, supporting informed decision making.",
            "Collaborate with employees and management to streamline data workflows and improve operational efficiency."
        ]
    },
    {
        companyName: "BUNCHA INC",
        location: "Minneapolis, MN",
        timePeriod: "June 2024 - Aug 2024",
        role: "On-field Software Engineer",
        description: [
            "Analyzed client needs and resolved bugs for ops and marketing challenges.",
            "Conducted discussions to gather insights and implemented targeted improvements.",
            "Achieved an 87% reduction in bug reports, resulting in enhanced app efficiency.",
        ]
    },
    {
        companyName: "BUNCHA INDIA PVT.LTD",
        location: "Remote",
        timePeriod: "Feb 2022 - Nov 2024",
        role: "Software Developer",
        description: [
            "Developed scalable APIs using GraphQL, Node.js, and Express, improving data retrieval and backend efficiency.",
            "Managed product and order data using PostgreSQL with Redis for caching, enhancing database performance.",
            "Integrated third-party services like Stripe, Twilio, SendGrid, Onfleet, and Google Maps API to support, payment, messaging, delivery, and geolocation functionalities.",
            "Deployed and scaled backend services using Docker, Kubernetes, and AWS, with Jenkins-powered CI/CD pipelines ensuring automated testing and efficient deployments.",
            "Utilized Git for version control and GitHub for code collaboration, enabling efficient team workflows and streamlined project management.",
            "Conducted API testing with Postman and automated UI testing with Appium, ensuring app stability and reliability.",
            "Monitored performance with New Relic and improved search functionality using Elasticsearch, enhancing user experience.",
            "Collaborated with cross-functional teams to design systems for scalability and operational efficiency.",
        ]
    },
    {
        companyName: "KUMI LABS PVT.LTD",
        location: "Remote",
        timePeriod: "Oct 2020 - Dec 2020",
        role: "JAVA Developer Intern",
        description: [
            "Developed POC of Gaming tournament product.",
            "Created a Real-Time analytics dashboard using Grafana to monitor all the transitions done on various platforms including various features required for analytics."
        ]
    },
    {
        companyName: "MIND TREE",
        location: "Remote",
        timePeriod: "Aug 2020 - Sep 2020",
        role: "SME (Computer Science)",
        description: [
            "Assisted students with conceptual and practical aspects of computer science primarily focused on problem solving and data structures."
        ]
    },
]

let projects = [
    {
        projectName: "Incident Response & Business Continuity System",
        details: "Course Project | Team Lead (12 Members) | University of Missouri – Kansas City",
        description: [
            "Led a 12-member team in developing an Incident Response, Disaster Recovery, and Business Continuity system as part of a graduate-level course.",
            "Designed and implemented RESTful APIs using Flask and PostgreSQL, enabling efficient incident tracking, playbook execution, and crisis communication.",
            "Integrated AI-powered summarization and automated stakeholder messaging to enhance real-time security response.",
            "Managed team coordination, task allocation, and development workflows, ensuring timely project completion.",
            "Conducted extensive API testing using Postman, validating system reliability and scalability."
        ]
    },
    {
        projectName: "E-commerce Website on Heroku Cloud",
        details: "Course Project | Backend Developer & Cloud (team of 4) | University of Missouri – Kansas City",
        description: [
            "Developed a cloud-based e-commerce website using Node.js, Express.js, and MongoDB, deployed on Heroku.",
            "Implemented user authentication, shopping cart functionality, product listings, and admin management features.",
            "Managed database integration and optimized server-side operations for seamless performance.",
            "Collaborated with a team using GitHub for version control and Zoom/WhatsApp for coordination.",
            "Deployed the application using Heroku GitHub integration, ensuring smooth CI/CD workflows."
        ]
    }
]

let educations = [
    {
        universityName: "University of Missouri Kansas City",
        timePeriod: "Aug 2023 - May 2025",
        details: "M.S.,Computer Science with an emphasis area in Software Engineering"
    },
    {
        universityName: "SASTRA Deemed to be University",
        timePeriod: "Jul 2018 - July 2022",
        details: "B.S., Computer Science and Engineering"
    }
]

function getExperience() {

    let html = ""
    companies.forEach(company => {
        
        description = company.description.reduce((acc,currentDescription) => {
            return acc + `<li>${currentDescription}</li>`
        }, '')

        html = html + `<div class = "all-company-details">
        <div class="company-container">
            <div class="company">
                <h2>${company.companyName}</h2>
                <h3>(${company.location})</h3>
            </div>
            <p class="timePeriod">${company.timePeriod}</p>
        </div>
        <ul>
            <li class="role">${company.role}</li>
            <ul class="role-description">
                ${description}
            </ul>
        </ul>
    </div>`
    })
    return html
}

function getProjects() {

    let html = ""
    projects.forEach(project => {
        
        description = project.description.reduce((acc,currentDescription) => {
            return acc + `<li>${currentDescription}</li>`
        }, '')

        html = html + `<div class = "all-project-details">
            <div>
                <h2>${project.projectName}</h2>
                <h4>${project.details}</h4>
            </div>
                <ul class="role-description">
                ${description}
                </ul>
        </div>`
    })
    return html
}

function getEducation() {
    educationRes = ""
    educations.forEach(education => {
        educationRes += `<div class="education">
        <div>
            <h2>${education.universityName}</h2>
        </div>
        <div>
            <p>${education.timePeriod}</p>
        </div>
    </div>
    <div>
        <ul>
            <li>${education.details}</li>
        </ul>
    </div>`
    })
    return educationRes
}

$(".all-company-details-from-js").html(getExperience())

$(".all-project-details-from-js").html(getProjects())

$(".all-education-details-from-js").html(getEducation())