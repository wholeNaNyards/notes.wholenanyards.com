const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "wny-notes-dev-attachmentsbucket-so40lmrw57tp"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notes-api.wholenanyards.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SMq5MpOs6",
    APP_CLIENT_ID: "2poqgrpnra0dbnchcm6mb1eavd",
    IDENTITY_POOL_ID: "us-east-1:bdf4019c-fa1b-4a5f-b23d-342fd899fed9"
  },
  STRIPE_KEY: "pk_test_MrE9drKz8t20MCPN6NoBRnbG00zXtlF0tU"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "wny-notes-prod-attachmentsbucket-78qxjdws9ch9"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notes-api.wholenanyards.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9dSkNzI2S",
    APP_CLIENT_ID: "rst6jnstgj6uhnh0b1ll5rdij",
    IDENTITY_POOL_ID: "us-east-1:777b9262-184b-4731-80f6-07b12ff600e7"
  },
  STRIPE_KEY: "pk_test_MrE9drKz8t20MCPN6NoBRnbG00zXtlF0tU"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
