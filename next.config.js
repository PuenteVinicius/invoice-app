/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss"; @import "styles/_globals.scss";`,
  },
};

export default nextConfig