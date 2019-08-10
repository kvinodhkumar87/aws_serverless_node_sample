# Simple Example using AWS Serverless and Node

Pre requisites:
1. AWS Account with admin permission
2. Node/NPM installed

Steps to create the serverless application:

1. Installing serverless package globally
sudo npm install serverless -g

2. Create a new serverless project 
serverless create -t aws-nodejs

3. Login to your AWS account and create an IAM User with Full Programattic access to Lambda and get the access key and secret key

4. Use the below command to configure the AWS access from your machine

serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY

5. After making the code change as the above given application, you're ready to deploy the application.
serverless deploy

6. Once the application is deployed you'll get the API endpoint which you can use it like a REST API call from browser or postman or from any other application. You can also view the lambda in the AWS Lambda Dashboard.
