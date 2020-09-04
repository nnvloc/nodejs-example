import Models from '@models';

class UserService {
  constructor() {
    this.UserModel = Models.Users;
  }

  getUsers(filters = {}) {
    return this.UserModel.findAll();
  }

  createUser(userParams) {
    return this.UserModel.create(userParams);
  }
}

export default new UserService();