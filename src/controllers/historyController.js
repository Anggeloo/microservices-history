const pool = require("../db/db");
const ApiResponse = require("../models/ApiResponse");
const { GET_HISTORY, CREATE_HISTORY } = require('../querys/query');

const historyController = {
  Query: {
    getHistory: async () => {
      try {
        const result = await pool.query(GET_HISTORY);
        return ApiResponse("success", result.rows, "History obtained correctly");
      } catch (error) {
        return ApiResponse("error", null, "Error getting history: " + error.message);
      }
    },
  },

  Mutation: {
    addHistory: async (_, { user_code, history_action }) => {
      try {
        const result = await pool.query(
          CREATE_HISTORY,
          [user_code, history_action]
        );
        return ApiResponse("success", result.rows, "History correctly added");
      } catch (error) {
        return ApiResponse("error", null, "Error in adding history: " + error.message);
      }
    },
  },
};

module.exports = historyController;
