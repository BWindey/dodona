name: Deploy Naos

on:
  workflow_dispatch:    
    inputs:
      branch:
        description: 'Branch to deploy'     
        required: true
        default: 'develop'

jobs:
  deploy:
    environment: 
      name: naos
      url: https://naos.ugent.be
    runs-on: ubuntu-latest
    steps:
    - name: Cancel previous deployments
      uses: styfle/cancel-workflow-action@0.9.0
      with:
        access_token: ${{ github.token }}
    - name: Install SSH key
      uses: shimataro/ssh-key-action@v2
      with:
        key: ${{ secrets.MESTRA_KEY }}
        known_hosts: ${{ secrets.MESTRA_HOST }}
    - name: Run deploy
      run: |
        echo "${{ github.event.inputs.branch }} naos" | ssh -p 4840 dodona@mestra.ugent.be
