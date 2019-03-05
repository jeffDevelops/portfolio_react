// const get = require('axios').get;
const util = require('util');
const github = require('octonode');

const TOKEN = process.env.GITHUB_TOKEN;
const ghClient = github.client(TOKEN);

module.exports = {
  languages: async function(req, res) {

    getAllRepoUrls();

    async function getUserRepoCount() {
      const info = await ghClient.me().infoAsync().catch(error => console.error(error));
      return info[0].public_repos + info[0].total_private_repos;
    }
    
    async function getAllRepoUrls() {
      const numRepos = await getUserRepoCount().catch(error => console.error(error));
      const numRequests = numRepos % 100 === 0 ? numRepos / 100 : Math.ceil(numRepos / 100); // 100 results per page
      const arr = new Array(numRequests).fill(0); // map won't heed empty elements
      const repoPromises = arr.map(async (_, index) => ghClient
        .me()
        .reposAsync({ page: index + 1, per_page: 100 })
        .catch(error => console.error(error)));
      
      const repos = await Promise.all(repoPromises).catch(error => console.error(error));
            
      const repoObjs = repos
        .map(responseArr => responseArr[0])
        .reduce((a, b) => a.concat(b), []);
      
      const languageInfo = repoObjs.map(async repo => {
        const ghRepo = ghClient.repo(`jeffdevelops/${repo.name}`).conditional('ETAG');
        return ghRepo.languagesAsync().catch(error => console.error(error));
      });
      
      Promise.all(languageInfo)
        .then(result => {
          res.json(result
            .filter(repo => repo) // filter the ones that don't have info
            .map((repo, index) => ({ [repoObjs[index].name]: repo ? repo[0] : null }))
          );
        })
        .catch(error => console.error(error));
    }
  },

  events: async function(req, res) {
    const eventPromises = await getEvents().catch(error => console.error(error));

    const events = eventPromises
      .map(dataArr => dataArr && dataArr[0] ? dataArr[0] : dataArr)  // filter out the response metadata by only returning element 0
      .filter(eventList => eventList && eventList.length && eventList.length > 0) // strip out events arrays whose length is 0 and pointless to send in the response
      .reduce((a, b) => a.concat(b), []) // concat the arrays together

    res.json(events);

    async function getEvents() {
      const arr = new Array(1).fill(0); // map won't heed empty elements
      
      const eventPromises = arr.map(async (_, index) => await ghClient
        .user('jeffDevelops')
        .eventsAsync(index + 1, 100)
        .catch(error => console.error(error)));

      return Promise.all(eventPromises)
        .then(results => results)
        .catch(error => res.status(500).json({ error }));
    }
  }

}