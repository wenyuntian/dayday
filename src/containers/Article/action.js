import { sortBy } from 'lodash';
import Utils from "../../utils/utils";

export const getArticleList = async () => {
  const articleList = await Utils.getData("/data.json");
  return articleList;
};

export const getArticleByName = async (articleName) => {
  const articleList = await Utils.getData("/data.json");

  return articleList.find(p => p.url.includes(articleName));
};
