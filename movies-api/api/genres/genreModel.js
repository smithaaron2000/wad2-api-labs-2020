import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const GenreSchema = new Schema({
    name: [{ type: String }],
    id: { type: Number, required: true, unique: true },
});

GenreSchema.statics.findByGenreDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Genre', GenreSchema);