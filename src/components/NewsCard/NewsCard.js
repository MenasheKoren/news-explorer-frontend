import React from "react";
import bookmarkIcon from "../../images/bookmark-icon.svg";

export function NewsCard() {
  return (
    <li className="newsCard">
      <button className="button newsCard__bookmark" type="button">
        <img
          src={bookmarkIcon}
          alt="Bookmark icon"
          className="newsCard__bookmark-icon"
        />
      </button>
      <img
        className="newsCard__image"
        src="https://i.picsum.photos/id/509/400/272.jpg?hmac=r798Bqv86D-CdN5qZhPRuX3M3bLD10icoQf3xGjwoHM"
        alt="#"
      />

      <div className="newsCard__text-container">
        <p className="newsCard__date">
          {new Date().toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="newsCard__title">There Are Only Happy Accidents</h3>
        <p className="newsCard__text">
          You can spend all day playing with mountains. Fluff that up. We'll
          have a super time. I started painting as a hobby when I was little. I
          didn't know I had any talent. I believe talent is just a pursued
          interest. Anybody can do what I do. Think about a cloud. Just float
          around and be there. I spend a lot of time walking around in the woods
          and talking to trees, and squirrels, and little rabbits and stuff.
        </p>
        <h4 className="newsCard__source">Bob Ross</h4>
      </div>
    </li>
  );
}
