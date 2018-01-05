const colors = require("../styles/colors");

module.exports = {
  pathPrefix: "/",
  siteTitle: "Nick Lewis Photography",
  siteLongTitle: "Nick Lewis Photoblog",
  siteUrl: "https://nicklewis.photo",
  siteLanguage: "en",
  siteLogo: "/logos/logo-1024.png",
  siteDescription: "This is the blog of photographer Nick Lewis",
  // manifest.json
  manifestName: "Nick Lewis Photography",
  manifestShortName: "NickLewisPhoto",
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.first,
  manifestThemeColor: colors.firstLight,
  manifestDisplay: "standalone",
  // analytics
  analyticsTrackingId: "UA-159000-25",
  // author note
  authorName: "Nick Lewis",
  authorDescription: `Freelance photographer, web developer and writer`,
  // texts
  copyright:
    "Copyright Nick Lewis 2018",
  disqusShortname: "nick-lewis-photography"
};
