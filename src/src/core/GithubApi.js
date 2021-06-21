function GetRepos(username) {
  return GetJson("https://api.github.com/users/" + username + "/repos");
}

async function GetRepoFiles(repo) {
  const treeUrl = (
    await GetJson(
      "https://api.github.com/repos/" +
        repo.full_name +
        "/branches/" +
        repo.default_branch
    )
  )["commit"]["commit"]["tree"]["url"];
  return await GetJson(treeUrl);
}

function GetFileContent(repo, filename) {
  return GetText(
    "https://raw.githubusercontent.com/" +
      repo.full_name +
      "/" +
      repo.default_branch +
      "/" +
      filename
  );
}

async function GetJson(url) {
  let response = await fetch(url, {
    headers: {
      // Authorization: "token ***",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.118 Safari/537.36",
    },
  });
  return await response.json();
}

async function GetText(url) {
  let response = await fetch(url);
  return await response.text();
}

export default {
  GetRepos,
  GetRepoFiles,
  GetFileContent,
};
