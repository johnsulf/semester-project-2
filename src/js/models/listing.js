export class Listing {
  constructor(
    id,
    title,
    description,
    tags,
    media,
    created,
    updated,
    endsAt,
    _count,
    _seller,
    _bids,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.media = media;
    this.created = created;
    this.updated = updated;
    this.endsAt = endsAt;
    this._count = _count;
    this._seller = _seller;
    this._bids = _bids;
  }

  static fromJson(json) {
    return new Listing(
      json.id,
      json.title,
      json.description,
      json.tags,
      json.media,
      json.created,
      json.updated,
      json.endsAt,
      json._count,
      json._seller,
      json._bids,
    );
  }
}
