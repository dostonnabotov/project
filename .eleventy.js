module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/style.css");

  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.addShortcode("layout", (layout) => {
    return `
            {% for math in collections.maths %}
              <section class="layout clearfix">
                <div class="layout__img">
                  <a href="{{ math.url }}">
                    <img loading="lazy" src="{{ math.data.img }}" alt="{{ math.data.img }}"/>
                  </a>
                </div>
                <div class="layout__info flow bg-white text dark">
                  <h3 class="fs-500">
                    <a href="{{ math.url }}" class="u-hover">{{ math.data.title }}</a>
                  </h3>
                  <p>{{ math.data.description }}</p>
                </div>
              </section>
            {% endfor %}`;
  });

  eleventyConfig.addShortcode("checklist", (checklist) => {
    return `
          <li>
            <span class="fa-li">
              <i class="fa-solid fa-check"></i>
            </span>
            <a href="${checklist.link}" class="u-hover">${checklist.name}</a>
          </li>`;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
