import { ERole } from '../../../shared/enum/role.enum';

export default class User {

  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public email?: string,
    public password?: string,
    public role?: ERole,
    ) { }
}
