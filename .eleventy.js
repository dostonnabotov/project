module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/style.css");

  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addNunjucksShortcode("card", function(card) {
    return ` <div class="card flow">
        <div class="card__img">
          <a target="_blank" rel="noopener noreferrer" href="${card.url}">
            <img src="${card.img}" alt="${card.imgAlt}" title="${card.imgAlt}"> 
          </a>
        </div>
        <div class="card__content flow">
          <h2>
            <a target="_blank" rel="noopener noreferrer" href="${card.url}">${card.title}</a>
          </h2>
          <div class="skills flex">
            <span class="skill">${card.skill_1}</span>
            <span class="skill">${card.skill_2 ? `${card.skill_2}` : ''}</span>
            <span class="skill">${card.skill_3 ? `${card.skill_3}` : ''}</span>
            <span class="skill">${card.skill_4 ? `${card.skill_4}` : ''}</span>
          </div>
          <div class="author flex">
            <div class="author__img">
              <img src="/assets/images/coding.jpg" alt="coding">
            </div>
            <div>
              <span class="author__name">Doston Nabotov</span>
              <span class="author__date">${card.date}</span>
            </div>
          </div>
        </div>
        <div class="card__meta flex">
          <a target="_blank" rel="noopener noreferrer" href="${card.github}">
            <i class="fab fa-github"></i>
            Github Repository
          </a>
          <a target="_blank" rel="noopener noreferrer" href="${card.url}">
            <i class="fas fa-link"></i>
            Live Site
          </a>
        </div>
      </div>`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
