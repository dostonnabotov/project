module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/style.css");

    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/index.js");
    eleventyConfig.addPassthroughCopy("./src/assets/");

    eleventyConfig.addShortcode("layout", function(layout) {
    return `<section class="layout clearfix">
                <div class="layout__img">
                    <a href="${layout.link}">
                        <img loading="lazy" src="${layout.imgUrl}" alt="${layout.imgAlt}" />
                    </a>
                </div>
                <div class="layout__info flow ${layout.dark ? `bg-dark text-white` : `bg-white text-dark`}">
                    <h3 class="fs-500">
                        <a href="${layout.link}" class="u-hover">${layout.title}</a>
                    </h3>
                    <p>${layout.content}</p>
                </div>
            </section>`;
  });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};