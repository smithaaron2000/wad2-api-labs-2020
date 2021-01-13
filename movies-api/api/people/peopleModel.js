import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PeopleSchema = new Schema({
  adult: { type: Boolean },
  gender: {type: Number },
  biography: {type: String},
  birthday: {type: String},
  deathday: {type: String},
  homepage: {type: String},
  imdb_id: {type: String},
  id: { type: Number, required: true, unique: true },
  known_for_department: {type: String},
  name: {type: String},
  place_of_birth: {type: String},
  popularity: {type: Number},
  profile_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  original_title: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  title: { type: String },
  backdrop_path: { type: String },
  vote_count: { type: Number },
});

PeopleSchema.statics.findByPeopleId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('People', PeopleSchema);


