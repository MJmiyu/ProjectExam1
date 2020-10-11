async function callApi(url) {
  const result = await fetch(url);
  const json = await result.json();
  return json;
}
