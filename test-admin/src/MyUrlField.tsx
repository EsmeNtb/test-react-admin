import { useRecordContext } from "react-admin";
import {Link} from "@mui/icons-material"
import LaunchCIcon from "@mui/icons-material/Launch"

const MyUrlField = ({ source }: { source: string }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{textDecoration: "none"}}>
            {record[source]}
            <LaunchCIcon sx={{fontSize: 15, ml:1}} />
        </Link>
    ) : null;
    /* if (!record) return null;
    return <a href={`https://${record[source]}`}>{record[source]}</a>; */
};

export default MyUrlField;