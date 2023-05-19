import { AiOutlineEllipsis } from "libraries/icon";
import { convertDate } from "utils";
import DriverItemLabel from "components/DriverLabel";

const DriverItem = ({driver}) => {

    return (
        <div className={'list__item'}>
            <div className="item__header">
                <h5 className="color__grey font__weight--400">
                    Driver ID <span className="color__primary font__weight--600">{driver.login.username}</span>
                </h5>
                <AiOutlineEllipsis className="color__grey font__size--18" />
            </div>
            <div className="item__body">
                <img src={driver.picture.thumbnail} alt={driver.name.first} className="avatar" />
                <div>
                    <DriverItemLabel label="Nama Driver" value={`${driver.name.first}, ${driver.name.last}`} />
                    <DriverItemLabel label="Telepon" value={driver.phone} />
                    <DriverItemLabel label="Email" value={driver.email} />
                    <DriverItemLabel label="Tanggal Lahir" value={convertDate(driver.dob.date)} />
                </div>
            </div>
        </div>
    );
};

export default DriverItem;