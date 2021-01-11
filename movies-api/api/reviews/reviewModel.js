import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  user: { type: String, unique: true, required: true},
  movie: {type: Number, required: true },
  review: {type: String, required: true}
});

// ReviewSchema.statics.findByUserName = function (user) {
//   return this.findOne({ user: user});
// };


export default mongoose.model('Review', ReviewSchema);