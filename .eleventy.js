module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/styles.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/pdf-files");
    eleventyConfig.addPassthroughCopy("./src/pdf-pages");

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
        }
    };
};