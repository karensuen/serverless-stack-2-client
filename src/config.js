const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-lagn0s4vfwby"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://uwjscv4xwa.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_hhBPIOPkZ",
    APP_CLIENT_ID: "662712ndogqnotgq02c5v7pmdr",
    IDENTITY_POOL_ID: "us-east-2:8f1434c3-90e4-4f8d-a45e-8203b1ec9f2a"
  }
};

const prod = {
  // provide details of production environment as above
}

//Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  //Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
