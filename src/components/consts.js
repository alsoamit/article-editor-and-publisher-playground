import { dispatcher } from "../dispatcher";

export const mapStateToProp = (state) => {
    return {
        posts: state,
    };
};

export const mapDispatchToProp = () => {
    return {
        dispatcher,
    };
};

export const tabs = [{
        id: 0,
        name: "Dashboard",
    },
    {
        id: 1,
        name: "New Post",
    },
    {
        id: 2,
        name: "Uploaded",
    },
    {
        id: 3,
        name: "Draft",
    },
    {
        id: 4,
        name: "Draft",
    },
];