export class Profile {
  constructor(
    name,
    email,
    bio,
    banner,
    avatar,
    credits,
    _count,
    _listings,
    _wins,
  ) {
    this.name = name;
    this.email = email;
    this.bio = bio;
    this.banner = banner;
    this.avatar = avatar;
    this.credits = credits;
    this._count = _count;
    this._listings = _listings;
    this._wins = _wins;
  }
}
