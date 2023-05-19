import {
    Fragment,
    Helmet,
    useDispatch,
    useSelector,
    useEffect,
    useState,
    useLocation,
    useNavigate,
    Localbase
} from "libraries";
import { driverSelector, searchDriver, getDriver } from "modules";
import { getDrivers } from "services";
import { getSliceData } from "utils";

import Loading from "components/Loading";
import HeaderTitle from "components/HeaderTitle";
import DriverItem from "components/DriverItem";
import Pagination from "components/Pagination";

import "assets/scss/driver.scss";

const Driver = () => {

    const dispatch = useDispatch();
    const drivers = useSelector(driverSelector);
    const location = useLocation();
    const navigate = useNavigate();

    const limit = 5;
    const params = new URLSearchParams(location.search);
    const getSlice = getSliceData(params, limit);

    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const localDb = new Localbase('shipper');
        const getDiver = async () => {
            const payload = { params: { results: 30 } };
            await getDrivers(payload);
        };

        localDb.collection('driver').get().then(collections => {
            if (collections.length === 0 ? getDiver() : dispatch(getDriver(collections[0])));
            setIsLoading(false);
        });
    }, [dispatch]);

    const handleSearch = (value) => {
        dispatch(searchDriver(value));
        navigate('/');
    };

    return (
        <Fragment>
            <Helmet>
                <title>Shipper Driver Management</title>
            </Helmet>
            <HeaderTitle
                title="Driver Management"
                description="Daftar Driver yang bekerja dengan Anda"
                onChangeSearch={handleSearch}
            />
            {isLoading && <Loading />}
            {!isLoading && drivers.length > 0 ? (
                <Fragment>
                    <div className={'driver__list'}>
                        {drivers.slice(getSlice.from, getSlice.to).map((driver, index) => (
                            <DriverItem driver={driver} key={index} />
                        ))}
                    </div>
                    <Pagination total={drivers.length} limit={limit} current={getSlice.page} />
                </Fragment> ):(
                <div className="alert margin__left--24px margin__right--24px">
                    <h5 className="color__grey font__weight--500">Data yang dicari tidak ditemukan</h5>
                </div>
            )}
        </Fragment>
    )
};

export default Driver;