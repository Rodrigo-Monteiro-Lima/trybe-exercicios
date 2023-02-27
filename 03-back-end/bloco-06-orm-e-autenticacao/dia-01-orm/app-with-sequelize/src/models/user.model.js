const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
    //Cria com o build
    // const sara = User.build({
    //   fullName: 'Sara Silva Santos',
    //   email: 'sara.ss@trybe.com',
    // });
    // await sara.save();
    //Cria com create
    // const sara = await User.create({
    //   fullName: 'Sara Silva Santos',
    //   email: 'sara.ss@trybe.com',
    // });
    //Update
    // sara.fullName = "Jane Doe";
    // await sara.save()
    //Update com set para + campos
    // sara.set({
    //   fullName: "Pedro Silva Santos",
    //   email: "pedro.ss@trybe.com"
    // });
    // await sara.save();
    //update com update
    // await sara.update({ fullName: "Ada Joe" });
    // await sara.save();
})();
  return User;
};

module.exports = UserModel;