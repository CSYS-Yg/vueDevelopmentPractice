module.exports = {
  presets: ["@vue/app", "@vue/babel-preset-jsx"],
  plugins: [
    [
      "import",
      {
        // 这个地方需注意名字
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: true // `style: true` 会加载 less 文件
      }
    ]
  ]
};
