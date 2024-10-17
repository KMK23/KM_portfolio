module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http: require.resolve("stream-http"),
    };
    return config;
  },
};
