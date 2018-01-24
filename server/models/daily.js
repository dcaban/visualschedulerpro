const mongoose = require('mongoose'),  
      Schema = mongoose.Schema;

//================================
// Daily Schema
//================================
const DailySchema = new Schema({

  user_id: {
    type: String,
    uppercase: true,
    required: true
  },
  date: {
    type:Date

  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = DailySchema;