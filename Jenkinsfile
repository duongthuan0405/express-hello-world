pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "devops-practice"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker Image: ${DOCKER_IMAGE}:${DOCKER_TAG}..."
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }
    }


    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo " SUCCESS: CI Pipeline completed successfully!"
            echo " Built image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo " FAILURE: CI Pipeline failed!"
            echo " Please check the console logs for details."
        }
    }
}
