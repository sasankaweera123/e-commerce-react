const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_c1d92daf289457f739b947e5f0bef3eb05e48912",
        options: {
            'sonar.projectName': 'e-commerce-react',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'e-commerce-react',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)