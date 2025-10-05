import mongoose from "mongoose";

const Shorturl_Schema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
        required: true,
        unique: true,
        index: true, // helps to find the document efficiently by lebelling
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true
});

const Shorturl = mongoose.model("Shorturl", Shorturl_Schema);
export default Shorturl;