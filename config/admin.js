module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4659d9320e02db9aa3ec04410b713cf'),
  },
});
