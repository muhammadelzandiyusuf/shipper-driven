import { AiOutlinePlus, AiOutlineSearch } from "libraries/icon";
import TextSearch from "components/TextSearch";
import Button from "components/Button";
import "assets/scss/header.scss";

const HeaderTitle = (props) => {

    return (
        <div className="header">
            <div className="header__title">
                <h1 className="font__size--26 font__weight--700 color__primary text__transform--uppercase">{props.title}</h1>
                <h5 className="font__weight--400">{props.description}</h5>
            </div>
            <div className="header__content">
                <TextSearch
                    onChange={(e) => props.onChangeSearch(e.target.value)}
                    placeholder="Cari Driver"
                    icon={<AiOutlineSearch className="icon font__size--18 color__primary" />}
                />
                <Button type={'primary'}>
                    <span className="text__transform--uppercase">Tambah Driver</span>
                    <AiOutlinePlus className="font__size--18 margin__left--8px" />
                </Button>
            </div>
        </div>
    );
};

export default HeaderTitle;