import { ERole } from '../../../shared/enum/role.enum';

export default class User {

  constructor(
    public id?: number,
    public name?: string,
    public role?: ERole,
    public pass?: string
    ) { }
}
