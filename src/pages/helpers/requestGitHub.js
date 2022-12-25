export const fetchRepositories = async () => {
  const response = await fetch ('https://api.github.com/users/RomildoFH/repos');
  const data = await response.json();
  console.log(data)
  return data;
}

export const fetchRepository = async (endpoint) => {
  const response = await fetch (`https://api.github.com/repos/RomildoFH/${endpoint}`);
  const data = await response.json();
  console.log(data)
  return data;
}
