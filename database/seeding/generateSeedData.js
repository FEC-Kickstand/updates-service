const faker = require('faker');

const LIKES_LIMIT = 500;
const COMMENTS_LIMIT = 40;
const BODY_PARAGRAPH_MAX = 15;
const BODY_PARAGRAPH_MIN = 2;
const MIN_UPDATES = 2;
const MAX_UPDATES = 10;
const KICKSTAND_FOUNDED = new Date(2009, 3, 28);

let updateCount = 0;

/* ***************SIMPLE UTILS*************** */

// randNum min and max are inclusive
const randomNum = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;
const getName = () => faker.name.findName();
const getLikes = () => randomNum(1, LIKES_LIMIT);
const getComments = () => randomNum(1, COMMENTS_LIMIT);
const getTitle = () => faker.hacker.phrase();
const getSentence = () => faker.lorem.sentence();
const paragraphsToHTMLArray = text => text.split('\n \r').map(paragraph => `<p>${paragraph}</p>`);

const randomDate = (start, end) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
);

// [0, 1, 2, 3, 4]
const randomizeArray = (arr) => {
  const copiedArr = arr.slice();
  for (let i = 0; i < copiedArr.length - 1; i += 1) {
    const j = randomNum(i, arr.length - 1);
    const temp = copiedArr[i];
    copiedArr[i] = copiedArr[j];
    copiedArr[j] = temp;
  }
  return copiedArr;
};

const intPadLeft = (num) => {
  if (String(num).length < 2) {
    return `0${num}`;
  }
  return String(num);
};

/* ***************COMPOUND UTILS*************** */

const generateProjectData = (ownerId, projectId) => ({
  owner: ownerId,
  project_id: projectId,
  project_name: getTitle(),
});

const generateUserData = userId => ({ user_id: userId, user_name: getName() });

const replaceRandomParagraphsWithBoldLines = (paragraphs) => {
  const paragraphsCopy = paragraphs.slice();
  const paragraphIndices = Array(paragraphs.length).fill(0).map((val, idx) => idx);
  const randomizedParagraphIndices = randomizeArray(paragraphIndices);
  const numberToReplace = randomNum(0, paragraphs.length / 2); // don't replace more than half

  for (let i = 0; i <= numberToReplace; i += 1) {
    const replaceIdx = randomizedParagraphIndices.pop();
    paragraphsCopy[replaceIdx] = `<p><b>${getSentence()}</b></p>`;
  }
  return paragraphsCopy.join('');
};

const getUpdateBody = () => {
  // from 2 to 15 paragraphs
  const paragraphCount = Math.floor(Math.random()
    * (BODY_PARAGRAPH_MAX - BODY_PARAGRAPH_MIN + 1))
    + BODY_PARAGRAPH_MIN;
  const regularText = faker.lorem.paragraphs(paragraphCount);
  return regularText;
};


const formatDateForSQL = (date) => {
  const year = date.getFullYear();
  const month = intPadLeft(date.getMonth() + 1);
  const day = intPadLeft(date.getDate());
  return `${year}-${month}-${day} ${'00'}:${'00'}:${'00'}`; // 'YYYY-MM-DD HH:MM:SS'
};

const getUpdateData = (postedBy, projectId) => {
  const date = randomDate(KICKSTAND_FOUNDED, new Date());
  updateCount += 1;
  let body = getUpdateBody();
  body = paragraphsToHTMLArray(body);
  body = replaceRandomParagraphsWithBoldLines(body);

  return {
    posted_by: postedBy,
    project: projectId,
    body,
    title: getTitle(),
    update_id: updateCount,
    likes: getLikes(),
    comments: getComments(),
    published_date: formatDateForSQL(date),
  };
};

const generateUpdates = (userIdx, projectIdx) => {
  const numOfUpdates = randomNum(MIN_UPDATES, MAX_UPDATES);
  const updates = [];

  for (let i = 0; i < numOfUpdates; i += 1) {
    updates.push(getUpdateData(userIdx, projectIdx));
  }
  return updates;
};

const generateAllSeedData = (num) => {
  const data = {
    users: [],
    projects: [],
    updates: [],
  };

  for (let i = 1; i <= num; i += 1) {
    data.users.push(generateUserData(i));
    data.projects.push(generateProjectData(i, i));

    generateUpdates(i, i).forEach((update) => {
      data.updates.push(update);
    });
  }

  return data;
};
generateAllSeedData(1);
module.exports = generateAllSeedData;
