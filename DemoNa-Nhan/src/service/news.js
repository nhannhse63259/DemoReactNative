import { articles_url, category, country_code, _api_key } from '../config/rest_consfig';
export async function getArticles() {
    try {
        let articles = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business',
            {
                headers: {
                    'X-API-KEY': _api_key
                }
            }
        );
        let result = await articles.json();
        articles = null;
        return result.articles;
    }
    catch (error) {
        throw error;
    }
}

/*`${articles_url}?country=${country_code}&category=${category}`*/