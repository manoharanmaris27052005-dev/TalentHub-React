import fs from "fs";

const companies = [
  "TCS",
  "Infosys",
  "Wipro",
  "HCL",
  "Accenture",
  "Capgemini",
  "Cognizant",
  "Tech Mahindra",
  "IBM",
  "Oracle"
];

const titles = [
  "Java Full Stack Developer",
  "React Developer",
  "Frontend Developer",
  "Backend Developer",
  "Node.js Developer",
  "Java Developer",
  "Software Engineer",
  "UI Developer",
  "Angular Developer",
  "Full Stack Engineer"
];

const locations = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Noida",
  "Coimbatore"
];

const jobs = [];

for (let i = 1; i <= 500; i++) {

  jobs.push({
    id: i,
    title:
      titles[
        Math.floor(
          Math.random() *
          titles.length
        )
      ],
    company:
      companies[
        Math.floor(
          Math.random() *
          companies.length
        )
      ],
    location:
      locations[
        Math.floor(
          Math.random() *
          locations.length
        )
      ],
    salary:
      `${4 + Math.floor(Math.random() * 12)} LPA`,
    experience:
      `${Math.floor(Math.random() * 4)}-${
        Math.floor(Math.random() * 6) + 2
      } Years`
  });

}

fs.writeFileSync(
  "db.json",
  JSON.stringify(
    { jobs },
    null,
    2
  )
);

console.log(
  "500 Jobs Generated Successfully 🚀"
);