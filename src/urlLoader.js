
const localURL = "http://localhost:7000";
const liveURL = "http://ec2-34-238-117-48.compute-1.amazonaws.com:7000";
console.log("::::",localURL);

module.exports = {
    url:process.env.NODE_ENV ==  'production' ? liveURL : localURL
}