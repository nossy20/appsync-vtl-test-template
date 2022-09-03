import { test, expect } from "vitest";
import { VTLLoader } from "./helper";

test("template test", async () => {
  // テストデータの作成
  const context = {
    arguments: { id: "USER_ID" },
    args: { id: "USER_ID" },
  };

  // vtlのアウトプットを取得
  const res = JSON.parse(VTLLoader("../sample.req.vtl", context));
  expect(res).toStrictEqual({
    version: "2018-05-29",
    operation: "GetItem",
    key: {
      id: {
        S: "USER_ID",
      },
    },
  });
});
