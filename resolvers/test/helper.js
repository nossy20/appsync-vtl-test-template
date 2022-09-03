import velocityUtil from "amplify-appsync-simulator/lib/velocity/util";
import velocityTemplate from "amplify-velocity-template";
import velocityMapper from "amplify-appsync-simulator/lib/velocity/value-mapper/mapper";
import * as fs from "fs";
import * as path from "path";

export const VTLLoader = (filePath, args) => {
  // vtlUtilの生成
  const errors = [];
  const now = new Date();
  const graphQLResolveInfo = {};
  const appSyncGraphQLExecutionContext = {};

  const vtlUtil = velocityUtil.create(
    errors,
    now,
    graphQLResolveInfo,
    appSyncGraphQLExecutionContext
  );

  // vtlファイルの読み込み
  const vtlPath = path.resolve(__dirname, filePath);
  const template = fs.readFileSync(vtlPath, { encoding: "utf8" });

  // vtlファイルのコンパイル
  const vtlAST = velocityTemplate.parse(template);
  const vtlCompiler = new velocityTemplate.Compile(vtlAST, {
    valueMapper: velocityMapper.map,
    escape: false,
  });
  return vtlCompiler.render({
    util: vtlUtil,
    utils: vtlUtil,
    ctx: args,
    context: args,
  });
};
