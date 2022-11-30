import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                                   dislikes: Number,
                                   handle: String,
                                   time: String,
                                   image: {
                                       type:String,
                                       default:"User.png"
                                   }

                               }, {collection: 'tuits'});
export default schema;
// load the mongoose library
// create the schema
// tuit property of type String
// likes property of type Number
// liked property of type Boolean
// collection name where tuits are stored in tuiter database
// export schema so it can be used elsewhere

