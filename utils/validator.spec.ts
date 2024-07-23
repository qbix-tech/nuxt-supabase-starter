import { describe, test, expect } from "vitest";

describe("`isPassword` utility", () => {
  test("should return false if it does not have special characters", () => {
    const input = "Qwert1234";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(false);
  });

  test("should return false if it does not have upper case characters", () => {
    const input = "qwert1234@";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(false);
  });

  test("should return false if it does not have lower case characters", () => {
    const input = "QWERT1234@";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(false);
  });

  test("should return false if it does not have number characters", () => {
    const input = "qwertabcde@";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(false);
  });

  test("should return false if it does not have alphabetical characters", () => {
    const input = "123456789@";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(false);
  });

  test("should return true if it has at least 1 upper case, 1 lower case, 1 number character and 1 special characters", () => {
    const input = "Qwert1234@";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if for escape characters", () => {
    const input = "Qwert1234{";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if dollar ($) sign used as special character", () => {
    const input = "Qwert1234$";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if euro (£) sign used as special character", () => {
    const input = "Qwert1234£";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if yen (¥) sign used as special character", () => {
    const input = "Qwert1234¥";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if british pound (€) sign used as special character", () => {
    const input = "Qwert1234€";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if whitespace is used as special character", () => {
    const input = "Qwert 1234";
    expect(isPassword(input, { min: 0, max: 0 })).toBe(true);
  });

  test("should return true if password length is above or equal to min length of 12 by default", () => {
    const input1 = "Qwert12345@@";
    const input2 = "Qwert123456@@@";
    expect(isPassword(input1)).toBe(true);
    expect(isPassword(input2)).toBe(true);
  });

  test("should return true if password length is above or equal to specified min length of 8", () => {
    const input1 = "Qwer1234@@";
    const input2 = "Qwert12345@@";
    const min = 8;
    expect(isPassword(input1, { min: min })).toBe(true);
    expect(isPassword(input2, { min: min })).toBe(true);
  });

  test("should return false if password length is below min length of 12 by default", () => {
    const input1 = "aA1@";
    const input2 = "Qwert1234@@";
    expect(isPassword(input1)).toBe(false);
    expect(isPassword(input2)).toBe(false);
  });

  test("should return false if password length is below specified min length of 8", () => {
    const input1 = "aA1@";
    const input2 = "Qwe123@";
    const min = 8;
    expect(isPassword(input1, { min: min })).toBe(false);
    expect(isPassword(input2, { min: min })).toBe(false);
  });

  test("should return true if password length is below or equal to max length of 64 by default", () => {
    const input1 =
      "^>P*8^twhUJZO1-B|P^&FxuBe3`0McTNK$BY!zTSu*XVt9,e-|RK<jB9<QP4[/O[";
    const input2 = "Qwert12345@@";
    expect(isPassword(input1)).toBe(true);
    expect(isPassword(input2)).toBe(true);
  });

  test("should return true if password length is below or equal to specified max length of 30", () => {
    const input1 = ",R2,{|VRyPmz_DT$$yfIx]qKg!-u{B";
    const input2 = "Qwert12345@@";
    const max = 30;
    expect(isPassword(input1, { max: max })).toBe(true);
    expect(isPassword(input2, { max: max })).toBe(true);
  });

  test("should return false if password length is above max length of 64 by default", () => {
    const input =
      "Bz(Q-z+B@hQ<:q<o5'Ppk=@noJ$?KkiEheeuSeb]l]8FNhRbqALrjq#xWk201uoS.";
    expect(isPassword(input)).toBe(false);
  });

  test("should return false if password length is above specified max length of 3", () => {
    const input = "aB3@";
    const max = 3;
    expect(isPassword(input, { max: max })).toBe(false);
  });
});

describe("`hasMinLength` utility", () => {
  test("should return true if string length is above or equal to min length of 0 by default", () => {
    const input1 = "";
    const input2 = "abc";
    expect(hasMinLength(input1)).toBe(true);
    expect(hasMinLength(input2)).toBe(true);
  });

  test("should return true if string length is above or equal to specified min length of 3", () => {
    const input1 = "abc";
    const input2 = "abcd";
    const min = 3;
    expect(hasMinLength(input1, min)).toBe(true);
    expect(hasMinLength(input2, min)).toBe(true);
  });

  test("should return false if string length is below specified min length of 3", () => {
    const input = "ab";
    const min = 3;
    expect(hasMinLength(input, min)).toBe(false);
  });
});

describe("`doesNotExceedMaxLength` utility", () => {
  test("should return true if string length is below or equal to max length of 0 by default", () => {
    const input1 = "";
    const input2 = "abc";
    expect(doesNotExceedMaxLength(input1)).toBe(true);
    expect(doesNotExceedMaxLength(input2)).toBe(true);
  });

  test("should return true if string length is below or equal to specified max length of 3", () => {
    const input1 = "";
    const input2 = "abc";
    const max = 3;
    expect(doesNotExceedMaxLength(input1, max)).toBe(true);
    expect(doesNotExceedMaxLength(input2, max)).toBe(true);
  });

  test("should return false if string length is above specified max length of 3", () => {
    const input = "abcd";
    const max = 3;
    expect(doesNotExceedMaxLength(input, max)).toBe(false);
  });
});

describe("`hasUpperCase` utility", () => {
  test("should return true if string has at least 1 upper case character", () => {
    const input = "Qwerty";
    expect(hasUpperCase(input)).toBe(true);
  });

  test("should return true if string has at more than 1 upper case character", () => {
    const input = "QwertY";
    expect(hasUpperCase(input)).toBe(true);
  });

  test("should return false if string does not have any upper case character", () => {
    const input = "qwerty";
    expect(hasUpperCase(input)).toBe(false);
  });
});

describe("`hasLowerCase` utility", () => {
  test("should return true if string has at least 1 lower case character", () => {
    const input = "qWERTY";
    expect(hasLowerCase(input)).toBe(true);
  });

  test("should return true if string has more than 1 lower case character", () => {
    const input = "qWERtY";
    expect(hasLowerCase(input)).toBe(true);
  });

  test("should return false if string does not have any lower case character", () => {
    const input = "QWERTY";
    expect(hasLowerCase(input)).toBe(false);
  });
});

describe("`hasNumber` utility", () => {
  test("should return true if string has at least 1 number character", () => {
    const input = "Qwerty1";
    expect(hasNumber(input)).toBe(true);
  });

  test("should return true if string has more than 1 number character", () => {
    const input = "Qwerty123";
    expect(hasNumber(input)).toBe(true);
  });

  test("should return false if string does not have any number character", () => {
    const input = "Qwerty";
    expect(hasNumber(input)).toBe(false);
  });
});

describe("`hasSpecialCharacter` utility", () => {
  test("should return true if string has at least 1 special character", () => {
    const input = "Qwerty1234@";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has more than 1 special character", () => {
    const input = "Qwerty1234@!";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return false if string does not have any special character", () => {
    const input = "Qwerty1234";
    expect(hasSpecialCharacter(input)).toBe(false);
  });

  test("should return true if string has whitespace as special character", () => {
    const input = "Qwerty1234 ";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has dollar ($) sign as special character", () => {
    const input = "Qwerty1234$";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has euro (£) sign as special character", () => {
    const input = "Qwerty1234£";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has yen (¥) sign as special character", () => {
    const input = "Qwerty1234¥";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has british pound (€) sign as special character", () => {
    const input = "Qwerty1234€";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `!` as special character", () => {
    const input = "Qwerty1234!";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `@` as special character", () => {
    const input = "Qwerty1234@";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `#` as special character", () => {
    const input = "Qwerty1234#";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `%` as special character", () => {
    const input = "Qwerty1234%";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `^` as special character", () => {
    const input = "Qwerty1234^";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `&` as special character", () => {
    const input = "Qwerty1234&";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `*` as special character", () => {
    const input = "Qwerty1234*";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `(` as special character", () => {
    const input = "Qwerty1234(";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `)` as special character", () => {
    const input = "Qwerty1234)";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `-` as special character", () => {
    const input = "Qwerty1234-";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `_` as special character", () => {
    const input = "Qwerty1234_";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `=` as special character", () => {
    const input = "Qwerty1234=";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `+` as special character", () => {
    const input = "Qwerty1234+";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `[` as special character", () => {
    const input = "Qwerty1234[";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `]` as special character", () => {
    const input = "Qwerty1234]";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `{` as special character", () => {
    const input = "Qwerty1234{";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `}` as special character", () => {
    const input = "Qwerty1234}";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `|` as special character", () => {
    const input = "Qwerty1234|";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `:` as special character", () => {
    const input = "Qwerty1234:";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `;` as special character", () => {
    const input = "Qwerty1234;";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `'` as special character", () => {
    const input = "Qwerty1234'";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test('should return true if string has `"` as special character', () => {
    const input = 'Qwerty1234"';
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `\\` as special character", () => {
    const input = "Qwerty1234\\";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `,` as special character", () => {
    const input = "Qwerty1234,";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `.` as special character", () => {
    const input = "Qwerty1234.";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `<` as special character", () => {
    const input = "Qwerty1234<";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `>` as special character", () => {
    const input = "Qwerty1234>";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `/` as special character", () => {
    const input = "Qwerty1234/";
    expect(hasSpecialCharacter(input)).toBe(true);
  });

  test("should return true if string has `?` as special character", () => {
    const input = "Qwerty1234?";
    expect(hasSpecialCharacter(input)).toBe(true);
  });
});
