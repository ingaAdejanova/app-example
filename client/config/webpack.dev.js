import { merge } from "webpack-merge";
import common from "./webpack.common";

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

export default merge(common, devConfig);
