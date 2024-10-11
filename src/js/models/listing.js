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
    seller,
    bids,
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
    this.seller = seller;
    this.bids = bids;
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
      json.seller,
      json.bids,
    );
  }
}
