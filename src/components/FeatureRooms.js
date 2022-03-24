import React, { Component } from "react";
import Titles from "./Titles";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Titles title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}