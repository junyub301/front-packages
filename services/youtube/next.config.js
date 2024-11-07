// eslint-disable-next-line @typescript-eslint/no-var-requires
const {createVanillaExtractPlugin} = require('@vanilla-extract/next-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack:(config,{isServer}) =>{
    config.module.rules.push(
      {
        test: /\.svg$/i,
        use:["@svgr/webpack"]
      }
    );
    if (isServer) {
      config.externals = [...(config.externals || []), '_http_common'];
      config.target = 'node';
    }
    return config
  },
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };

  const withVanillaExtract = createVanillaExtractPlugin();
  
  module.exports = withVanillaExtract(nextConfig);
  