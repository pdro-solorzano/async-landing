const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCjFr4d1M8d-cJSaCZJPhf8A&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd530dd627mshef16ff81b93fee9p15a55bjsn5e400276045e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}`;
    content.innerHTML = view;
    console.log(view);
    console.log(content);
  } catch (error) {
    console.error(error);
  }
})();

/* fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */