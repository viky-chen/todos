import * as bcrypt from 'bcrypt';
export class PasswordUtils {
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
  static async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  }
}
