const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    yesOrNo: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    place: { type: Object, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Data", DataSchema);