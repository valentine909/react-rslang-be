const wordRepo = require('./word.db.repository');

const getAll = async conditions => wordRepo.getAll(conditions);

const get = async wordId => {
  return await wordRepo.get(wordId);
};

const getAllWords = async () => {
  return await wordRepo.getAllWords();
};

module.exports = { getAll, get, getAllWords };
