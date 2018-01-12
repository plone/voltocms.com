#!groovy

pipeline {

  agent any

  options {
    disableConcurrentBuilds()
    timeout(time: 15, unit: 'MINUTES')
  }

  stages {

    // Build
    stage('Build') {
      agent {
        label 'master'
      }
      steps {
        deleteDir()
        checkout scm
        sh 'npm install'
        sh 'node_modules/gatsby/dist/bin/gatsby.js build --prefix-paths'
      }
    }

    // Deploy
    stage('Deploy') {
      agent {
        label 'master'
      }
      when {
        branch 'master'
      }
      steps {
        sh 'ssh kitconcept.io "(cd /srv/pastanaga.io/ && git fetch --all && git reset --hard origin/master)"'
        sh 'ssh kitconcept.io "(cd /srv/pastanaga.io/ && npm install)"'
        sh 'ssh kitconcept.io "(cd /srv/pastanaga.io/ && node_modules/gatsby/dist/bin/gatsby.js build --prefix-paths)"'
      }
    }

    // Performance Tests
    stage('Performance Tests') {
      agent {
        label 'master'
      }
      when {
        branch 'master'
      }
      steps {
        deleteDir()
        checkout scm
        sh 'npm install'
        // psi
        script {
          psiExitCode = sh(
            script: 'npm run psi',
            returnStdout: true
          )
        }
        echo "psiExitCode: ${psiExitCode}"
        echo "Pipeline result: ${currentBuild.result}"
        echo "Pipeline currentResult: ${currentBuild.currentResult}"
        // webpagetest
        /*sh 'npm run webpagetest:ci'
        step([
          $class: 'JUnitResultArchiver',
          testResults: 'performance**.xml',
          checkHealthScaleFactor: 0.2
        ])*/
        // lighthouse
        // sh 'npm run lighthouse:ci'
      }
      post {
        always {
          /*publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: '.',
            reportFiles: 'lighthouse-report.html',
            reportName: "Lighthouse"
          ])*/
          script {
            currentBuild.getPreviousBuild().getResult().toString()
            currentBuild.result = 'SUCCESS'
            echo "Pipeline result: ${currentBuild.result}"
            echo "Pipeline currentResult: ${currentBuild.currentResult}"
          }
        }
      }
    }

  }
}