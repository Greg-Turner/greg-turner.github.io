// define experience category arrays for the resume
let job = []
let cert = []
let edu = []

// define the experience objects for the resume
const teklinks = {
    "name": "Teklinks Inc.",
    "category": "job",
    "title": "Technical Account Manager",
    "location": "Franklin, TN",
    "startDate": "Sept. 2016",
    "endDate": "Sept. 2017",
    "comment": "",
    "order": 1
}

const dellL2 = {
    "name": "Dell Inc.",
    "category": "job",
    "title": "Account Team Lead/Coach",
    "location": "Nashville, TN",
    "startDate": "March 2013",
    "endDate": "Aug. 2016",
    "comment": "",
    "order": 2
}

const dellA = {
    "name": "Dell Inc.",
    "category": "job",
    "title": "Tier 1 and Tier 2 Agent",
    "location": "Nashville, TN",
    "startDate": "Oct. 2010",
    "endDate": "March 2013",
    "comment": "",
    "order": 3
}

const cioOffice = {
    "name": "CIO Office Inc.",
    "category": "job",
    "title": "Systems Engineer",
    "location": "Brentwood, TN",
    "startDate": "Sept. 2009",
    "endDate": "Feb. 2010",
    "comment": "",
    "order": 4
}

const comptiaA = {
    "name": "CompTia",
    "category": "cert",
    "title": "A+",
    "location": "",
    "startDate": "",
    "endDate": "2007",
    "comment": "",
    "order": 1
}

const comptiaN = {
    "name": "CompTia",
    "category": "cert",
    "title": "Network+",
    "location": "",
    "startDate": "",
    "endDate": "2008",
    "comment": "",
    "order": 2
}

const mcp = {
    "name": "Microsoft",
    "category": "cert",
    "title": "Certified Professional (MCP)",
    "location": "",
    "startDate": "",
    "endDate": "2008",
    "comment": "",
    "order": 3
}

const ccna = {
    "name": "Cisco",
    "category": "cert",
    "title": "CCNA",
    "location": "",
    "startDate": "",
    "endDate": "2009",
    "comment": "",
    "order": 4
}

const itt = {
    "name": "ITT Technical Institute",
    "category": "edu",
    "title": "Bachelor of Data Communication System Technology",
    "location": "Nashville, TN",
    "startDate": "",
    "endDate": "May 2009",
    "comment": "* GPA 4.0 * Valedictorian * Perfect Attendance *",
    "order": 1
}

// populate the category arrays with the experience objects
job.push(teklinks)
job.push(dellL2)
job.push(dellA)
job.push(cioOffice)
cert.push(comptiaA)
cert.push(comptiaN)
cert.push(mcp)
cert.push(ccna)
edu.push(itt)

// populate resume database with category arrays
let resume = {
    "job": job,
    "cert": cert,
    "edu": edu
}

// convert resume database into string saved in browser memory
const resumeString = JSON.stringify(resume)
localStorage.setItem("resume", resumeString)
