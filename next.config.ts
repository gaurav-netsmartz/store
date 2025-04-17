const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? 'store' : '',
  assetPrefix: isGithubPages ? 'store' : '',
};
