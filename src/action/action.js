import { sortBy } from 'lodash';
import moment from "moment";
import Utils from "../utils/utils.js";

export const getArticleList = async () => {
  const articleList = await Utils.getData("/data.json");
  return sortBy(articleList, (item) => { Date.parse(item.time) });
};

export const getArticleByName = async (articleName) => {
  const articleList = await Utils.getData("/data.json");

  return articleList.find(p => p.url.includes(articleName));
};

export const getWorkList = async (articleName) => {
  const workList = await Utils.getData("/works.json");

  return workList;
};

export const getArchiveList = async () => {
  let categoryByYear = new Map();
  const archiveList = await Utils.getData("/data.json");

  archiveList.forEach((item, index) => {
    let year = moment(item.time).format("YYYY");
    
    if(! categoryByYear.has(year)) {
      categoryByYear.set(year, []);
    }

    categoryByYear.get(year).push(item);
  })

  return categoryByYear;
};
