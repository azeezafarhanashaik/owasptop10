const vulnerabilities = [
    {
        id: 1,
        title: "Broken Access Control",
        shortDesc: "Restrictions on authenticated users are not properly enforced",
        longDesc: "Broken Access Control vulnerabilities occur when users can act outside of their intended permissions. This typically leads to unauthorized information disclosure, modification, or destruction of data.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/"
    },
    {
        id: 2,
        title: "Cryptographic Failures",
        shortDesc: "Failures related to cryptography that often lead to sensitive data exposure",
        longDesc: "Previously known as 'Sensitive Data Exposure', these failures can expose sensitive data like passwords, credit card numbers, and personal information due to weak or missing encryption.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A02_2021-Cryptographic_Failures/"
    },
    {
        id: 3,
        title: "Injection",
        shortDesc: "User-supplied data is not validated, filtered, or sanitized",
        longDesc: "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A03_2021-Injection/"
    },
    {
        id: 4,
        title: "Insecure Design",
        shortDesc: "Missing or ineffective control design",
        longDesc: "A new category focusing on risks related to design and architectural flaws, calling for more use of threat modeling, secure design patterns, and reference architectures.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A04_2021-Insecure_Design/"
    },
    {
        id: 5,
        title: "Security Misconfiguration",
        shortDesc: "Missing appropriate security hardening",
        longDesc: "Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete configurations, or misconfigured HTTP headers.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A05_2021-Security_Misconfiguration/"
    },
    {
        id: 6,
        title: "Vulnerable Components",
        shortDesc: "Using components with known vulnerabilities",
        longDesc: "Components, such as libraries, frameworks, and software modules, run with the same privileges as the application. If a vulnerable component is exploited, it can facilitate serious data loss or server takeover.",
        image: "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/"
    },
    {
        id: 7,
        title: "Authentication Failures",
        shortDesc: "Authentication-related attacks",
        longDesc: "Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/"
    },
    {
        id: 8,
        title: "Software and Data Integrity Failures",
        shortDesc: "Software updates and critical data without verification",
        longDesc: "Software and data integrity failures relate to code and infrastructure that does not protect against integrity violations. This can occur when using software updates, critical data, and CI/CD pipelines without verification.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/"
    },
    {
        id: 9,
        title: "Security Logging Failures",
        shortDesc: "Insufficient logging and monitoring",
        longDesc: "Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, and pivot to more systems.",
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/"
    },
    {
        id: 10,
        title: "Server-Side Request Forgery",
        shortDesc: "SSRF flaws occur when a web application fetches a remote resource",
        longDesc: "SSRF flaws occur when a web application is fetching a remote resource without validating the user-supplied URL. It enables an attacker to coerce the application to send a crafted request to an unexpected destination.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
        moreInfoUrl: "https://owasp.org/Top10/A10_2021-Server_Side_Request_Forgery_%28SSRF%29/"
    }
];

function createVulnerabilityCard(vuln) {
    const card = document.createElement('div');
    card.className = 'vulnerability-card';
    card.dataset.id = vuln.id;

    const content = `
        <div class="card-header">
            <span class="number-badge">${vuln.id}</span>
            <h3 class="card-title">${vuln.title}</h3>
        </div>
        <p class="card-description">${vuln.shortDesc}</p>
    `;

    card.innerHTML = content;

    card.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        // Remove active class from all cards
        document.querySelectorAll('.vulnerability-card').forEach(card => {
            card.classList.remove('active');
            card.innerHTML = createBasicCardContent(vulnerabilities[card.dataset.id - 1]);
        });

        if (!isActive) {
            this.classList.add('active');
            this.innerHTML = createExpandedCardContent(vuln);
        }
    });

    return card;
}

function createBasicCardContent(vuln) {
    return `
        <div class="card-header">
            <span class="number-badge">${vuln.id}</span>
            <h3 class="card-title">${vuln.title}</h3>
        </div>
        <p class="card-description">${vuln.shortDesc}</p>
    `;
}

function createExpandedCardContent(vuln) {
    return `
        <div class="card-header">
            <span class="number-badge">${vuln.id}</span>
            <h3 class="card-title">${vuln.title}</h3>
        </div>
        <p class="card-description">${vuln.longDesc}</p>
        <img src="${vuln.image}" alt="${vuln.title}" class="card-image">
        <a href="${vuln.moreInfoUrl}" target="_blank" rel="noopener noreferrer" class="more-info-btn" onclick="event.stopPropagation()">
            More Info
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
        </a>
    `;
}

// Initialize the grid
const grid = document.getElementById('vulnerabilitiesGrid');
vulnerabilities.forEach(vuln => {
    grid.appendChild(createVulnerabilityCard(vuln));
});