import {Select} from "antd";
import {SelectProps} from "rc-select/lib/Select";


export default function MenusPage() {

    const options:SelectProps['options'] = [
        {
            label: "Option 1",
            value: "1"
        },
        {
            label: "Option 2",
            value: "2"
        }
    ]



    return (
        <div className={"w-full h-full"}>
            <Select className={"w-36"} options={options} />
        </div>
    )
}
