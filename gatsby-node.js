// exports.modifyBabelrc = ({ babelrc }) => ({
//   ...babelrc,
//   plugins: babelrc.plugins.concat(
//     ['transform-regenerator'],
//     ['transform-runtime']
//   ),
// })

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-transform-regenerator`,
  })
  actions.setBabelPlugin({
    name: `@babel/plugin-transform-runtime`,
  })
}

// You can delete this file if you're not using it
