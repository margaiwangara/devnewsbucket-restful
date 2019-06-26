const fetch = require("node-fetch");
const cheerio = require("cheerio");

const url = "https://laravel-news.com/category/news";

const getLaravelData = () => {
  return fetch(`${url}`).then(response => response.text()).then(data => {
    const $ = cheerio.load(data);
    const articles = [];
    $(".card--post").each(function(i, el){
      const $element = $(el);
  
      const $image = $element.find(".post__image a img");
      const $date = $element.find(".post__content span > span:last-child");
      const $link = $element.find(".post__content h2 a");
      const $title = $element.find(".post__content h2 a");
      const $content = $element.find(".post__content p");
      
      const article = {
        image: $image.attr("src"),
        date: $date.text(),
        link: $link.attr("href").replace("/", ""),
        title: $title.text(),
        content: $content.text()
      }
  
      articles.push(article);
    });
    return articles;
  });
}

module.exports = {
  getLaravelData
}