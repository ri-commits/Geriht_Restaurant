import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__spetialMenu flex__center section__padding" id="menu">
    <div className="app__spetialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__spetialMenu-menu">
      <div className="app__spetialMenu-menu_wine flex__center">
        <p className="app__spetialMenu-menu_heading">Wine & Beer</p>
        <div className="app__spetialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="app__spetialMenu-menu_img">
        <img src={images.menu} alt="menu_img" />
      </div>

      <div className="app__spetialMenu-menu_coctails flex__center">
        <p className="app__spetialMenu-menu_heading">Wine & Beer</p>
        <div className="app__spetialMenu-menu_items">
          {data.cocktails.map((coctail, index) => (
            <MenuItem
              key={coctail.title + index}
              title={coctail.title}
              tags={coctail.tags}
              price={coctail.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
