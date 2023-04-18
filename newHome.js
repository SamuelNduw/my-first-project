const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a94bc929fmsh49ffb24a5e1b717p16ef5djsn3952b41f4a7a',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/search_news?query=GTA&sort_by=date&from_date=2023-04-13&to_date=2023-04-16', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));