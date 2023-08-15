<div className="">
<div className="left-menu flex">
  <div className="menu-image-wrapper">
    <img
      className="menu-rest-img"
      src={IMG_CDN_URL1 + restaurent?.cloudinaryImageId}
    />
  </div>
  <div className="menu-det">
    <span className="resID">Restaurant ID: {id}</span>
    <h2 className="name">{restaurent?.name}</h2>
    <p className="cuisines">{restaurent?.cuisines?.join(", ")}</p>
    <p className="address">
      {restaurent?.locality + ", " + restaurent?.areaName}
    </p>
    <p className="ratings">
      {restaurent?.avgRating} ⭐ | Total Ratings:{" "}
      {restaurent?.totalRatingsString}
    </p>
  </div>
</div>
{/* <div className="right-menu">
  <h3>What would you like to have today:</h3>
  <div className="menu-items-container">
    {menuItem.map((item, i) => {
      return item ? (
        <div className="menu-items" key={i}>
          <div className="detail">
            <p className="item-name">{item?.name}</p>
            <p>
              Rs.{" "}
              {Math.trunc(item?.price / 100)
                ? Math.trunc(item?.price / 100)
                : ""}
            </p>
            <p className="item-rating">
              {item?.ratings?.aggregatedRating?.rating != undefined
                ? item?.ratings?.aggregatedRating?.rating +
                  " | " +
                  item?.ratings?.aggregatedRating?.ratingCount
                : ""}
            </p>
          </div>
          <div className="addToCartContainer">
            <img
              src={item?.imageId ? MENU_ITEM_IMAGE + item?.imageId : ""}
              className="menu-item-image"
            />
            <button className="btn-addToCart">Add</button>
          </div>
        </div>
      ) : null;
    })}
  </div>
</div> */}
</div>