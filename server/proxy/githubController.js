// const get = require('axios').get;
const util = require('util');
const github = require('octonode');

const TOKEN = process.env.GITHUB_TOKEN;
const ghClient = github.client(TOKEN);

module.exports = {
  personal: function(req, res) {

    getAllRepoUrls();

    async function getUserRepoCount() {
      const info = await ghClient.me().infoAsync().catch(error => console.error(error));
      return info[0].public_repos + info[0].total_private_repos;
    }

    async function getPushEvents() {
      const arr = new Array(10).fill(0); // map won't heed empty elements
      
      const eventPromises = arr.map(async (_, index) => await ghClient
        .user('jeffDevelops')
        .eventsAsync(index + 1, 100)
        .catch(error => console.error(error)));

      return Promise.all(eventPromises)
        .then(results => results)
        .catch(error => console.error(error));
    }

    async function getAllRepoUrls() {
      const numRepos = await getUserRepoCount().catch(error => console.error(error));
      const numRequests = numRepos % 100 === 0 ? numRepos / 100 : Math.ceil(numRepos / 100); // 100 results per page
      const arr = new Array(numRequests).fill(0); // map won't heed empty elements
      const repoPromises = arr.map(async (_, index) => await ghClient
        .me()
        .reposAsync({ page: index + 1, per_page: 100 })
        .catch(error => console.error(error)));

      const repos = await Promise.all(repoPromises).catch(error => console.error(error));

      console.log('Checkpoint: ', repos);

      const repoObjs = repos
        .map(responseArr => responseArr[0])
        .reduce((a, b) => a.concat(b), []);

      const languageInfo = repoObjs.map(async repo => {
        const ghRepo = ghClient.repo(`jeffdevelops/${repo.name}`).conditional('ETAG');
        return await ghRepo.languagesAsync().catch(error => console.error(error));
      });

      const promises = [ ...languageInfo, getPushEvents() ];

      Promise.all(promises)
        .then(result => {
          
          const events = result[result.length - 1]; // getPushEvents() is called as the last element in promises

          result.splice(result.length - 1, 1); // remove the events element in order to process the languageInfo
          const languageInfo = result
            .map((repo, index) => ({ [repoObjs[index].name]: repo ? repo[0] : null }))
            .filter(repo => repo[Object.keys(repo)[0]]) // filter the ones that don't have info

          res.json({
            languageInfo,
            events
          });
        })
        .catch(error => console.error(error));
    }
  }
}