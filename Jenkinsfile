pipeline {
  agent {
    node {
      label '8.9'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
        sh 'npm run dev'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}