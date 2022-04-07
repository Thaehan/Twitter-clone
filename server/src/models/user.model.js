module.exports = (mongoose) => {
  var userSchema = mongoose.Schema({
    username: String,
    password: String,
  });

  userSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model('user', userSchema);
  return User;
};
