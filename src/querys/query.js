module.exports = {
  GET_HISTORY: 'SELECT * FROM history ORDER BY created_at DESC',
  CREATE_HISTORY: `INSERT INTO history (user_code, history_action) VALUES ($1, $2) RETURNING *`
};