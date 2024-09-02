pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh './build.sh' // or your specific build command
            }
        }
        stage('Test') {
            steps {
                sh './test.sh' // or your specific test command
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh' // or your specific deployment command
            }
        }
    }
}
